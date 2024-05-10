import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ruta')
  getRuta(): string {
    return 'nueva ruta';
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string): string {
    return `product ${productId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): string {
    return `product: limit: ${limit} offset: ${offset} brand: ${brand}`;
  }

  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): string {
    return `product ${productId} and ${id}`;
  }
}
