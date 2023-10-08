import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Operacione } from '../operaciones/entities/operacione.entity';
import { Repository } from 'typeorm';
import { CategoriasProducto } from '../categorias-productos/entities/categorias-producto.entity';
import { EnvasesProducto } from '../envases-productos/entities/envases-producto.entity';
import { UnidadesMedidaProducto } from '../unidades-medida-producto/entities/unidades-medida-producto.entity';
import { PresentacionesProducto } from '../presentaciones-producto/entities/presentaciones-producto.entity';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Operacione)
    private operacionesRepository: Repository<Operacione>,
    @InjectRepository(CategoriasProducto)
    private categoriasRepository: Repository<CategoriasProducto>,
    @InjectRepository(EnvasesProducto)
    private envasesRepository: Repository<EnvasesProducto>,
    @InjectRepository(UnidadesMedidaProducto)
    private unidadMeidaRepository: Repository<UnidadesMedidaProducto>,
    @InjectRepository(PresentacionesProducto)
    private presentacionesRepository: Repository<PresentacionesProducto>,
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    try {
      const id_operacion = createProductoDto.fk_operacion.id_operacion_usuario;
      const existeOperacion = await this.operacionesRepository.findOne({
        where: { id_operacion_usuario: id_operacion, estatus: 1 },
      });

      if (existeOperacion == null) {
        throw new HttpException(
          'No existe la operación del usuario',
          HttpStatus.NOT_FOUND,
        );
      }

      const id_categoria = createProductoDto.fk_categoria.id_categoria;
      const existeCategoria = await this.categoriasRepository.findOne({
        where: { id_categoria: id_categoria, estatus: 1 },
      });

      if (existeCategoria == null) {
        throw new HttpException('No existe la categoria', HttpStatus.NOT_FOUND);
      }

      const id_envase = createProductoDto.fk_envase.id_envase;
      const existeEnvase = await this.envasesRepository.findOne({
        where: { id_envase: id_envase, estatus: 1 },
      });

      if (existeEnvase == null) {
        throw new HttpException('No existe el envase', HttpStatus.NOT_FOUND);
      }

      const id_unidad = createProductoDto.fk_unidadMedia.id_unidad_medida;
      const existeUnidad = await this.unidadMeidaRepository.findOne({
        where: { id_unidad_medida: id_unidad, estatus: 1 },
      });

      if (existeUnidad == null) {
        throw new HttpException(
          'No existe la unidad de medida',
          HttpStatus.NOT_FOUND,
        );
      }

      const id_presentacion = createProductoDto.fk_presentacion.id_presentacion;
      const existePresentacion = await this.presentacionesRepository.findOne({
        where: { id_presentacion: id_presentacion, estatus: 1 },
      });

      if (existePresentacion == null) {
        throw new HttpException(
          'No existe la presentacón del producto',
          HttpStatus.NOT_FOUND,
        );
      }

      const existeProducto = await this.productoRepository.findOne({
        where: {
          nombre_producto: createProductoDto.nombre_producto,
          envase: createProductoDto.fk_envase,
          operacione: createProductoDto.fk_operacion,
          unidadMedida: createProductoDto.fk_unidadMedia,
          presentaciones: createProductoDto.fk_presentacion,
          estatus: 1,
        },
      });

      if (existeProducto != null) {
        throw new HttpException('El producto ya existe', HttpStatus.NOT_FOUND);
      }

      const nuevoProducto = new Producto();
      nuevoProducto.nombre_producto = createProductoDto.nombre_producto;
      nuevoProducto.codigo_barras = createProductoDto.codigo_barras;
      nuevoProducto.url_imagen = createProductoDto.url_imagen;
      nuevoProducto.contenido_neto = createProductoDto.contenido_neto;
      nuevoProducto.categoria = existeCategoria;
      nuevoProducto.envase = existeEnvase;
      nuevoProducto.operacione = existeOperacion;
      nuevoProducto.presentaciones = existePresentacion;
      nuevoProducto.unidadMedida = existeUnidad;
      this.productoRepository.create(nuevoProducto);
      return this.productoRepository.save(nuevoProducto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  findAll() {
    return `This action returns all productos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
