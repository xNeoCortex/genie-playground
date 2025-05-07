import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from '../entities/order.entity';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // Create a new order
  @Post()
  async createOrder(@Body() dto: { userId: number; items: { productId: number; quantity: number }[] }): Promise<Order> {
    return this.orderService.createOrder(dto);
  }

  // List orders for a user (authentication placeholder: userId param)
  @Get('user/:userId')
  async listOrdersForUser(@Param('userId') userId: string): Promise<Order[]> {
    return this.orderService.listOrdersForUser(Number(userId));
  }
}