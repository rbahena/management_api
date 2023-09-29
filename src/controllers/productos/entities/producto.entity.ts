import { CategoriasProducto } from 'src/controllers/categorias-productos/entities/categorias-producto.entity';
import { EnvasesProducto } from 'src/controllers/envases-productos/entities/envases-producto.entity';
import { Operacione } from 'src/controllers/operaciones/entities/operacione.entity';
import { PresentacionesProducto } from 'src/controllers/presentaciones-producto/entities/presentaciones-producto.entity';
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

@Entity({ name: 'productos' })
export class Producto {
  @PrimaryGeneratedColumn()
  id_producto: number;

  @ManyToOne(() => Operacione, (operacione) => operacione.productos)
  @JoinColumn({ name: 'fk_operacion' })
  operacione: Operacione;

  @Column({ type: 'varchar' })
  nombre_producto: string;

  @Column({ type: 'varchar', unique: true, nullable: true })
  codigo_barras: string;

  @Column({ type: 'int', nullable:true })
  compartido: number;

  @Column({ type: 'text' })
  url_imagen: string;

  @Column({ type: 'varchar', nullable: true })
  contenido_neto: string;

  @ManyToOne(() => CategoriasProducto, (categoria) => categoria.id_categoria)
  @JoinColumn({ name: 'fk_categoria' })
  categoria: CategoriasProducto;

  @ManyToOne(() => EnvasesProducto, (envase) => envase.id_envase)
  @JoinColumn({ name: 'fk_envase' })
  envase: EnvasesProducto;

  @ManyToOne(() => UnidadesMedidaProducto, (unidadMedida) => unidadMedida.id_unidad_medida)
  @JoinColumn({ name: 'fk_unidadMedia' })
  unidadMedida: UnidadesMedidaProducto;

  
  @ManyToOne(() => PresentacionesProducto, (presentaciones) => presentaciones.id_presentacion)
  @JoinColumn({ name: 'fk_presentacion' })
  presentaciones: PresentacionesProducto;

  @Column({ type: 'int', default: 1 })
  estatus: number;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  fecha_alta: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_baja: Date;
}
