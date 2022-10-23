import { Module } from '@nestjs/common';
import { ContaModule } from './conta/contas.module';

@Module({
  imports: [ContaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
