import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class AppService {
constructor(private configService: ConfigService) {}
  getServiceName(req: Request): string {
    let real_ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    if(real_ip === '::1'){
      real_ip = '127.0.0.1 (localhost)';
    }
    return `Service: ${this.configService.get('SERVICE_NAME')} - connected with IP: ${real_ip || 'not-found'}`;
  }
}
