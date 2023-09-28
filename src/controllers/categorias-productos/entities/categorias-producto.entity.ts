import { Operacione } from 'src/controllers/operaciones/entities/operacione.entity';
import { Suscriptor } from 'src/suscriptores/entities/suscriptor.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'cat_categorias_productos' })
export class CategoriasProducto {
  @PrimaryGeneratedColumn()
  id_categoria: number;

  @ManyToOne(() => Operacione, (operacione) => operacione.categorias)
  @JoinColumn({ name: 'fk_operacion' })
  operacione: Operacione;

  @Column({ type: 'varchar' })
  nombre_categoria: string;

  @Column({ type: 'int', default: 1 })
  estatus: number;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  fecha_alta: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_baja: Date;
}
