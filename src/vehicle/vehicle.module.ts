import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { Vehicle } from './entities/vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rented } from './entities/rented.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, Rented])],
  controllers: [VehicleController],
  providers: [VehicleService],
  exports: [TypeOrmModule],
})
export class VehicleModule {}
