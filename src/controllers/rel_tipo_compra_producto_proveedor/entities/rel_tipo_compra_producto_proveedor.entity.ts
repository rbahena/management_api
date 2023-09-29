import { CategoriasProducto } from 'src/controllers/categorias-productos/entities/categorias-producto.entity';
import { EnvasesProducto } from 'src/controllers/envases-productos/entities/envases-producto.entity';
import { Operacione } from 'src/controllers/operaciones/entities/operacione.entity';
import { PresentacionesProducto } from 'src/controllers/presentaciones-producto/entities/presentaciones-producto.entity';
import { Producto } from 'src/controllers/productos/entities/producto.entity';
import { Proveedore } from 'src/controllers/proveedores/entities/proveedore.entity';
import { UnidadCompra } from 'src/controllers/unidad-compra/entities/unidad-compra.entity';
import { UnidadesMedidaProducto } from 'src/controllers/unidades-medida-producto/entities/unidades-medida-producto.entity';
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

@Entity({ name: 'rel_tipo_compra_producto_proveedor' })

export class RelTipoCompraProductoProveedor {

    @PrimaryGeneratedColumn()
    id_rel_producto_proveedor: number;
  
    @ManyToOne(() => Operacione, (operacione) => operacione.productos)
    @JoinColumn({ name: 'fk_operacion' })
    operacione: Operacione;

      
    @ManyToOne(() => Producto, (productos) => productos.id_producto)
    @JoinColumn({ name: 'fk_producto' })
    productos: Producto;

    @ManyToOne(() => Proveedore, (proveedores) => proveedores.id_proveedor)
    @JoinColumn({ name: 'fk_proveedor' })
    proveedores: Proveedore;

  
    @ManyToOne(() => UnidadCompra, (unidadCompra) => unidadCompra.id_unidad_compra)
    @JoinColumn({ name: 'fk_unidad_compra' })
    unidadesCompra: UnidadCompra;

  
    @Column({ type: 'int' })
    pzas_unidad: number;

    @Column({ type: 'varchar' })
    costo_unidad: string;

    @Column({ type: 'varchar' })
    costo_pza: string;
  
    @Column({ type: 'timestamp', nullable: true })
    fecha_actualizacion: Date;

    @Column({ type: 'int', default: 1 })
    estatus: number;
  
    @Column({ type: 'timestamp', default: () => 'NOW()' })
    fecha_alta: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    fecha_baja: Date;

}
