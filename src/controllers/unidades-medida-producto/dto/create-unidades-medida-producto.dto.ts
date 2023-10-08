import { Operacione } from "src/controllers/operaciones/entities/operacione.entity";

export class CreateUnidadesMedidaProductoDto {
    fk_operacion: Operacione;
    nombre_unidad: string;
    siglas_unidad: string;
}
