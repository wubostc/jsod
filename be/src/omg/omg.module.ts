import { Module } from '@nestjs/common';
import { OmgController } from './omg.controller';
import { OmgService } from './omg.service';
import { Flow } from './entites/flow.entity';
import { Industry } from './entites/industry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Flow, Industry])],
  controllers: [OmgController],
  providers: [OmgService],
})
export class OmgModule {}
