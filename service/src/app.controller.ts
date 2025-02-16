import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getServiceName(@Req() req: Request): string {
    return this.appService.getServiceName(req);
  }
}
