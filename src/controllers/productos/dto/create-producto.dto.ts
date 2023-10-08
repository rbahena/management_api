import { CategoriasProducto } from 'src/controllers/categorias-productos/entities/categorias-producto.entity';
import { EnvasesProducto } from 'src/controllers/envases-productos/entities/envases-producto.entity';
import { Operacione } from 'src/controllers/operaciones/entities/operacione.entity';
import { PresentacionesProducto } from 'src/controllers/presentaciones-producto/entities/presentaciones-producto.entity';
import { UnidadesMedidaProducto } from 'src/controllers/unidades-medida-producto/entities/unidades-medida-producto.entity';

export class CreateProductoDto {
  fk_operacion: Operacione;
  fk_categoria: CategoriasProducto;
  fk_envase: EnvasesProducto;
  fk_unidadMedia: UnidadesMedidaProducto;
  fk_presentacion: PresentacionesProducto;
  nombre_producto: string;
  codigo_barras: string;
  url_imagen: string;
  contenido_neto: string;
}
