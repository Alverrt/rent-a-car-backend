import { Reservation } from 'src/reservations/entities/reservation.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Rented } from '../../vehicle/entities/rented.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  adsoyad: string;

  @Column({ nullable: true })
  telefon: string;

  @Column({ nullable: true })
  tc: string;

  @Column({ nullable: true })
  sehir: string;

  @Column({ nullable: true })
  statu: string;

  @OneToMany(() => Rented, (rented) => rented.user)
  rented: Rented[];

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservations: Reservation[];
}
