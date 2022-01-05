import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  modelYili: string;

  @Column()
  plaka: string;

  @Column()
  saseNo: string;

  @Column()
  km: string;

  @Column()
  kmSinir: string;

  @Column()
  gerekliEhliyetYasi: string;

  @Column()
  minimumYasSiniri: string;

  @Column()
  airbag: string;

  @Column()
  bagajHacmi: string;

  @Column()
  koltukSayisi: string;

  @Column()
  fiyati: string;
}
