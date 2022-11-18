import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FlitroExcecaoHttp } from './conta/common/filtros/filtro-de-excessao.filters';
import { ContaModule } from './conta/contas.module';
import { TransformResponseInterceptor } from './core/http/transform_response_interceptor';

@Module({
  imports: [ContaModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FlitroExcecaoHttp
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformResponseInterceptor
    }
  ],
})
export class AppModule {}
