import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.reservations)
  user: User;

  @OneToOne(() => Vehicle, { cascade: true })
  @JoinColumn()
  vehicle: Vehicle;

  @Column()
  rezervasyonBaslangicTarihi: string;

  @Column()
  rezervasyonBitisTarihi: string;
}
