import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Flow } from './entites/flow.entity';
import { Industry } from './entites/industry.entity';

@Injectable()
export class OmgService {
  constructor(
    @InjectRepository(Flow)
    private flowRepository: Repository<Flow>,
    @InjectRepository(Industry)
    private industryRepository: Repository<Industry>,
  ) {}

  findFlow() {
    return this.flowRepository.find();
  }

  findIndustries() {
    return this.industryRepository.find();
  }
}
