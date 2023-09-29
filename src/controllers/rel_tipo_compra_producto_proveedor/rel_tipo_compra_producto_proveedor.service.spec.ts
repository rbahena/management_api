import { Test, TestingModule } from '@nestjs/testing';
import { RelTipoCompraProductoProveedorService } from './rel_tipo_compra_producto_proveedor.service';

describe('RelTipoCompraProductoProveedorService', () => {
  let service: RelTipoCompraProductoProveedorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelTipoCompraProductoProveedorService],
    }).compile();

    service = module.get<RelTipoCompraProductoProveedorService>(RelTipoCompraProductoProveedorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
