import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'suscriptores' })
export class Suscriptor {
  @PrimaryGeneratedColumn()
  id_suscriptor: number;

  @OneToOne(() => User)
  @JoinColumn()
  fk_usuario: User;

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
}
