import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { OrderItem } from './order-item.entity';

export enum OrderStatus {
  PENDING = 'pending',
  PAID = 'paid',
  SHIPPED = 'shipped',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders, { onDelete: 'SET NULL', nullable: true })
  user: User;

  @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
  items: OrderItem[];

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;

  @CreateDateColumn()
  createdAt: Date;
}