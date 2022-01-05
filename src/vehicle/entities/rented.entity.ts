import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Vehicle } from './vehicle.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Rented {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Vehicle)
  @JoinColumn()
  vehicle: Vehicle;

  @ManyToOne(() => User, (user) => user.rented)
  user: User;

  @Column()
  kiralamaTarihi: string;

  @Column()
  bitisTarihi: string;
}
