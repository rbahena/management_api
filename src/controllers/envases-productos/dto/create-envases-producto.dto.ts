import { Operacione } from "src/controllers/operaciones/entities/operacione.entity";

export class CreateEnvasesProductoDto {
    fk_operacion: Operacione;
    nombre_envase: string;
}
