import { PartialType } from '@nestjs/swagger';
import { CreateRelTipoCompraProductoProveedorDto } from './create-rel_tipo_compra_producto_proveedor.dto';

export class UpdateRelTipoCompraProductoProveedorDto extends PartialType(CreateRelTipoCompraProductoProveedorDto) {}
