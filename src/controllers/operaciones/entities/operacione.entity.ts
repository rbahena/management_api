import { CategoriasProducto } from 'src/controllers/categorias-productos/entities/categorias-producto.entity';
import { EnvasesProducto } from 'src/controllers/envases-productos/entities/envases-producto.entity';
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

@Entity({ name: 'operaciones_usuarios' })
export class Operacione {
  @PrimaryGeneratedColumn()
  id_operacion_usuario: number;

  @ManyToOne(() => Suscriptor, (suscriptor) => suscriptor.operaciones)
  @JoinColumn({ name: 'fk_suscriptor' })
  suscriptor: Suscriptor;

  @Column({ type: 'varchar' })
  nombre_operacion: string;

  @Column({ type: 'int', default: 1 })
  estatus: number;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  fecha_alta: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_baja: Date;

  @OneToMany(() => CategoriasProducto, (categorias) => categorias.id_categoria)
  categorias: CategoriasProducto[];

  @OneToMany(() => EnvasesProducto, (envases) => envases.id_envase)
  envases: EnvasesProducto[];

  @OneToMany(() => UnidadesMedidaProducto, (unidadMedida) => unidadMedida.id_unidad_medida)
  unidadesMedidas: UnidadesMedidaProducto[];

  @OneToMany(() => PresentacionesProducto, (presentaciones) => presentaciones.id_presentacion)
  presentaciones: PresentacionesProducto[];
}
