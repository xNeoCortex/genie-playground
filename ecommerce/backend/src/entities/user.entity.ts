import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cart } from './cart.entity';
import { Order } from './order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string; // hashed

  @Column({ length: 255 })
  name: string;

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}