import { Operacione } from 'src/controllers/operaciones/entities/operacione.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'suscriptores' })
export class Suscriptor {
  @PrimaryGeneratedColumn()
  id_suscriptor: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'fk_usuario' })
  usuario: User;

  @Column({ type: 'varchar' })
  nombre_usuario: string;

  @Column({ type: 'varchar' })
  primer_apellido: string;

  @Column({ type: 'varchar' })
  segundo_apellido: string;

  @Column({ type: 'int' })
  operaciones_disponibles: number;

  @Column({ type: 'int', default: 1 })
  estatus: number;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  fecha_alta: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_baja: Date;

  @OneToMany(() => Operacione, (operaciones) => operaciones.id_operacion_usuario)
  operaciones: Operacione[];

}
