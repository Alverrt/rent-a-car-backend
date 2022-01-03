import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => User, (user) => user.reservations)
  user: User;

  @OneToOne(() => Vehicle)
  @JoinColumn()
  vehicle: Vehicle;

  @Column()
  rezervasyonBaslangicTarihi: string;

  @Column()
  rezervasyonBitisTarihi: number;
}
