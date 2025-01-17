// Empleado.entity.ts
import { AdelantoSueldo } from 'src/sueldos/entities/adelanta_sueldo.entity';
import { RegistroAsistencia } from '../../asistencias/entities/asistencia.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  puesto: string;

  @OneToMany(() => RegistroAsistencia, registro => registro.empleado)
  registrosAsistencia: RegistroAsistencia[];

  @OneToMany(() => AdelantoSueldo, adelanto => adelanto.empleado)
  adelantosSueldo: AdelantoSueldo[];
}
