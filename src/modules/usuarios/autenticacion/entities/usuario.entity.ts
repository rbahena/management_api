import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class User {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ type: 'varchar', unique: true })
  correo_electronico: string;

  @Exclude()
  @Column({ type: 'text' })
  contrasena: string;

  @Column({ type: 'int', default: 0 })
  correo_confirmado: number;

  @Column({ type: 'varchar' })
  nombre_operacion_prueba: string;

  @Column({ type: 'int', default: 1 })
  periodo_prueba: number;

  @Column({ type: 'text', nullable: true, default: 'null' })
  auth_strategy: string;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  inicio_prueba: Date;

  @Column({ type: 'timestamp', default: () => 'NOW() + interval 1 day' })
  fin_prueba: Date;

  @Column({ type: 'int', default: 1 })
  estatus: number;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  fecha_alta: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_baja: Date;
}
function exclude(target: User, propertyKey: 'contrasena'): void {
  throw new Error('Function not implemented.');
}

