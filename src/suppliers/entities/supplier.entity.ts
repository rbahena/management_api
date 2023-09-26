import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'proveedores' })
export class proveedores {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre_proveedor: string;

  @Column({ type: 'int', default: 1 })
  estatus: number;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  fecha_alta: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_baja: Date;
}
