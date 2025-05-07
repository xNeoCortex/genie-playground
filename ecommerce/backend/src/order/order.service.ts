import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order, OrderStatus } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { Product } from '../entities/product.entity';
import { User } from '../entities/user.entity';

interface CreateOrderItemDto {
  productId: number;
  quantity: number;
}

interface CreateOrderDto {
  userId: number;
  items: CreateOrderItemDto[];
}

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemRepo: Repository<OrderItem>,
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async createOrder(dto: CreateOrderDto): Promise<Order> {
    const user = await this.userRepo.findOne({ where: { id: dto.userId } });
    if (!user) throw new NotFoundException('User not found');

    let total = 0;
    const items: OrderItem[] = [];
    for (const itemDto of dto.items) {
      const product = await this.productRepo.findOne({ where: { id: itemDto.productId } });
      if (!product) throw new NotFoundException(`Product ${itemDto.productId} not found`);
      total += Number(product.price) * itemDto.quantity;

      const orderItem = this.orderItemRepo.create({
        product,
        quantity: itemDto.quantity,
      });
      items.push(orderItem);
    }

    const order = this.orderRepo.create({
      user,
      items,
      total,
      status: OrderStatus.PENDING,
    });
    return this.orderRepo.save(order);
  }

  async listOrdersForUser(userId: number): Promise<Order[]> {
    return this.orderRepo.find({
      where: { user: { id: userId } },
      relations: ['items', 'items.product'],
      order: { createdAt: 'DESC' },
    });
  }
}