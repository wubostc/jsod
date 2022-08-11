import { Controller, Get } from '@nestjs/common';
// import { unused } from 'src/utils';
import { OmgService } from './omg.service';

@Controller('/omg')
export class OmgController {
  constructor(private readonly omgService: OmgService) {}

  @Get('/flow')
  getFlow() {
    return this.omgService.findFlow();
  }

  @Get('/industries')
  getIndustries() {
    return this.omgService.findIndustries();
  }
}
