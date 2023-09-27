import { Suscriptor } from 'src/suscriptores/entities/suscriptor.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity({ name: 'usuarios' })
export class User {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ type: 'varchar', unique: true })
  correo_electronico: string;

  @Column({ type: 'text' })
  contrasena: string;

  @Column({ type: 'int', default: 0 })
  correo_confirmado: number;

  @Column({ type: 'varchar' })
  nombre_operacion_prueba: string;

  @Column({ type: 'int', default: 1 })
  periodo_prueba: number;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  inicio_prueba: Date;

  @Column({ type: 'timestamp', default: () => 'NOW() + interval 1 day' })
  fin_prueba: Date;

  @Column({ type: 'text', nullable: true, default: 'null' })
  auth_strategy: string;

  @Column({ type: 'int', default: 1 })
  estatus: number;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  fecha_alta: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_baja: Date;

  @OneToOne(() => Suscriptor, (suscriptor) => suscriptor.fk_usuario)
  suscriptor: Suscriptor;
}
