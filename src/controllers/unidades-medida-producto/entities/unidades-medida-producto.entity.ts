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


@Entity({ name: 'cat_unidades_medida' })

export class UnidadesMedidaProducto {

    @PrimaryGeneratedColumn()
    id_unidad_medida: number;
  
    @ManyToOne(() => Operacione, (operacione) => operacione.unidadesMedidas)
    @JoinColumn({ name: 'fk_operacion' })
    operacione: Operacione;
  
    @Column({ type: 'varchar' })
    nombre_unidad: string;

    @Column({ type: 'varchar' })
    siglas_unidad: string;
  
    @Column({ type: 'int', default: 1 })
    estatus: number;
  
    @Column({ type: 'timestamp', default: () => 'NOW()' })
    fecha_alta: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    fecha_baja: Date;

}
