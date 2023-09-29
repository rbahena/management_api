import { Operacione } from 'src/controllers/operaciones/entities/operacione.entity';
import { RelTipoCompraProductoProveedor } from 'src/controllers/rel_tipo_compra_producto_proveedor/entities/rel_tipo_compra_producto_proveedor.entity';
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

@Entity({ name: 'proveedores' })

export class Proveedore {

    @PrimaryGeneratedColumn()
    id_proveedor: number;
  
    @ManyToOne(() => Operacione, (operacione) => operacione.proveedores)
    @JoinColumn({ name: 'fk_operacion' })
    operacione: Operacione;
  
    @Column({ type: 'varchar' })
    nombre_proveedor: string;
  
    @Column({ type: 'int', default: 1 })
    estatus: number;
  
    @Column({ type: 'timestamp', default: () => 'NOW()' })
    fecha_alta: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    fecha_baja: Date;

    @OneToMany(() => RelTipoCompraProductoProveedor, (relacionProductoProveedor) => relacionProductoProveedor.id_rel_producto_proveedor)
    proveedores: RelTipoCompraProductoProveedor[];

}