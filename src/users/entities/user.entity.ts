import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class User {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ unique: true })
  correo_electronico: string;

  @Column({ type: "varchar"})
  contrasena: string;

  @Column({ type: 'timestamp' })
  periodo_prueba: boolean;

  @Column({ type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP' })
  inicio_prueba: Date;

  @Column()
  fin_prueba: Date;

  @Column({ nullable: true, default: 'null' })
  auth_strategy: string;

  @Column()
  estatus: boolean;

  @Column({ type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP' })
  fecha_alta: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_baja: Date;
}
