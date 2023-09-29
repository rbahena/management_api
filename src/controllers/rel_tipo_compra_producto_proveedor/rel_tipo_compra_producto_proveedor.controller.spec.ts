import { Test, TestingModule } from '@nestjs/testing';
import { RelTipoCompraProductoProveedorController } from './rel_tipo_compra_producto_proveedor.controller';
import { RelTipoCompraProductoProveedorService } from './rel_tipo_compra_producto_proveedor.service';

describe('RelTipoCompraProductoProveedorController', () => {
  let controller: RelTipoCompraProductoProveedorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelTipoCompraProductoProveedorController],
      providers: [RelTipoCompraProductoProveedorService],
    }).compile();

    controller = module.get<RelTipoCompraProductoProveedorController>(RelTipoCompraProductoProveedorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
