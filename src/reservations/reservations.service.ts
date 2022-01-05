import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { Vehicle } from '../vehicle/entities/vehicle.entity';
import { DeleteReservationDto } from './dto/delete-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private reservationsRepository: Repository<Reservation>,
  ) {}

  create(createReservationDto: CreateReservationDto) {
    return this.reservationsRepository.insert({
      vehicle: { id: createReservationDto.vehicleId },
      user: { id: createReservationDto.userId },
      rezervasyonBaslangicTarihi:
        createReservationDto.rezervasyonBaslangicTarihi,
      rezervasyonBitisTarihi: createReservationDto.rezervasyonBitisTarihi,
    });
  }

  findAll(): Promise<Reservation[]> {
    return this.reservationsRepository.find({ relations: ['vehicle', 'user'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updas a #${id} reservation`;
  }

  delete(deleteReservationDto: DeleteReservationDto) {
    return this.reservationsRepository.delete(deleteReservationDto.id);
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
