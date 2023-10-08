import { Operacione } from "src/controllers/operaciones/entities/operacione.entity";

export class CreatePresentacionesProductoDto {
    fk_operacion: Operacione;
    nombre_presentacion: string;
}
