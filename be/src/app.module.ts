import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OmgModule } from './omg/omg.module';
import { mysqlOrm } from './orm';

@Module({
  imports: [mysqlOrm, OmgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
