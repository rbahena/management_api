import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class User {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ type: 'varchar', unique: true })
  correo_electronico: string;

  @Column({ type: 'text' })
  contrasena: string;

  @Column({ type: 'boolean', default: false })
  correo_confirmado: boolean;

  @Column({ type: 'varchar' })
  nombre_operacion_prueba: string;

  @Column({ type: 'boolean', default: true })
  periodo_prueba: boolean;

  @Column({ type: 'timestamp', nullable: true })
  inicio_prueba: Date;

  @Column({ type: 'timestamp', nullable: true })
  fin_prueba: Date;

  @Column({ type: 'text', nullable: true, default: 'null' })
  auth_strategy: string;

  @Column({ type: 'boolean', default: true })
  estatus: boolean;

  @Column({ type: 'timestamp', nullable: true })
  fecha_alta: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_baja: Date;
}
