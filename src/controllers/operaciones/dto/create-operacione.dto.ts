import { Suscriptor } from "src/suscriptores/entities/suscriptor.entity";

export class CreateOperacioneDto {
    fk_suscriptor: Suscriptor;
    nombre_operacion: string;
}
