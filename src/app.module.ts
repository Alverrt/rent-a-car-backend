import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { VehicleModule } from './vehicle/vehicle.module';
import { Vehicle } from './vehicle/entities/vehicle.entity';
import { Rented } from './vehicle/entities/rented.entity';
import { ReservationsModule } from './reservations/reservations.module';
import { Reservation } from './reservations/entities/reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: '123456aA',
      database: 'uniodev',
      entities: [User, Vehicle, Rented, Reservation],
      synchronize: true,
    }),
    UserModule,
    VehicleModule,
    ReservationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
