import { Operacione } from 'src/controllers/operaciones/entities/operacione.entity';
import { Producto } from 'src/controllers/productos/entities/producto.entity';
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


@Entity({ name: 'cat_unidades_compra_producto' })

export class UnidadCompra {

    @PrimaryGeneratedColumn()
    id_unidad_compra: number;
  
    @ManyToOne(() => Operacione, (operacione) => operacione.unidadesCompra)
    @JoinColumn({ name: 'fk_operacion' })
    operacione: Operacione;
  
    @Column({ type: 'varchar' })
    nombre_unidad_compra: string;
  
    @Column({ type: 'int', default: 1 })
    estatus: number;
  
    @Column({ type: 'timestamp', default: () => 'NOW()' })
    fecha_alta: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    fecha_baja: Date;
}
