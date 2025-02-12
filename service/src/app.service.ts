import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
constructor(private configService: ConfigService) {}
  getServiceName(): string {
    return `Service: ${this.configService.get('SERVICE_NAME')}`;
  }
}
