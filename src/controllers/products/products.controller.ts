import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/:productId')
  getProduct(@Param('productId') productId: string): string {
    return `product ${productId}`;
  }

  @Get('')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): any {
    return {
      message: `product: limit: ${limit} offset: ${offset} brand: ${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'acción de crear',
      payload,
    };
  }
}
