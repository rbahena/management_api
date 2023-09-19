import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class User {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ unique: true })
  correo_electronico: string;

  @Column()
  contrasena: string;

  @Column({ type: 'datetime', default: () => 1 })
  periodo_prueba: boolean;

  @Column({ type: 'datetime', default: () => 'current_timestamp' })
  inicio_prueba: Date;

  @Column()
  fin_prueba: Date;

  @Column({ nullable: true, default: 'null' })
  auth_strategy: string;

  @Column()
  estatus: boolean;

  @Column({ type: 'datetime', default: () => 'current_timestamp' })
  fecha_alta: Date;

  @Column({ type: 'datetime', nullable: true, default: 'null' })
  fecha_baja: Date;
}
