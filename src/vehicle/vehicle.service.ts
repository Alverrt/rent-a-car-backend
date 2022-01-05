import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { Rented } from './entities/rented.entity';
import { CreateRentedDto } from './dto/create-rented.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,

    @InjectRepository(Rented)
    private rentedRepository: Repository<Rented>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.vehicleRepository.insert(createVehicleDto);
  }

  findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  createRented(createRentedDto: CreateRentedDto) {
    return this.rentedRepository.insert({
      vehicle: { id: createRentedDto.vehicleId },
      user: { id: createRentedDto.userId },
      kiralamaTarihi: createRentedDto.kiralamaTarihi,
      bitisTarihi: createRentedDto.bitisTarihi,
    });
  }

  findAllRentedVehicles(): Promise<Rented[]> {
    return this.rentedRepository.find({ relations: ['vehicle', 'user'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicle`;
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }
}
