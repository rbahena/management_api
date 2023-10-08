import { Operacione } from "src/controllers/operaciones/entities/operacione.entity";

export class CreateCategoriasProductoDto {
    fk_operacion: Operacione;
    nombre_categoria: string;
}
