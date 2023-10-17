import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

 @Entity({ name: 'usuarios' })
export class User {
  //@PrimaryGeneratedColumn()
  @Column()
  id_usuario: number;

  //@Column({ type: 'varchar', unique: true })
  @Column()
  correo_electronico: string;

  //@Column({ type: 'text' })
  @Column()
  contrasena: string;

  //@Column({ type: 'int', default: 0 })
  @Column()
  correo_confirmado: number;

  //@Column({ type: 'varchar' })
  @Column()
  nombre_operacion_prueba: string;

  //@Column({ type: 'int', default: 1 })
  @Column()
  periodo_prueba: number;

  //@Column({ type: 'text', nullable: true, default: 'null' })
  @Column()
  auth_strategy: string;

  //@Column({ type: 'timestamp', default: () => 'NOW()' })
  @Column()
  inicio_prueba: Date;

  //@Column({ type: 'timestamp', default: () => 'NOW() + interval 1 day' })
  @Column()
  fin_prueba: Date;

  //@Column({ type: 'int', default: 1 })
  @Column()
  estatus: number;

  //@Column({ type: 'timestamp', default: () => 'NOW()' })
  @Column()
  fecha_alta: Date;

  //@Column({ type: 'timestamp', nullable: true })
  @Column()
  fecha_baja: Date;
  
}
