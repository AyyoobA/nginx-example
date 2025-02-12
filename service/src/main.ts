import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs'

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(process.env.PRIVATE_KEY),
    cert: fs.readFileSync(process.env.CERTIFICATE),
  };  
  const app = await NestFactory.create(AppModule, {
    httpsOptions
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
