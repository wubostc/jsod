import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import '../config.js';

const HOSTNAME = process.env.NEST_HOSTNAME;
const PORT = process.env.NEST_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(PORT, HOSTNAME, () => {
    console.log(`app running at ${HOSTNAME}:${PORT}`);
    console.log('app version', process.env.APP_VERSION);
    console.log('app ping', process.env.NESTJS_PING);
  });
}
bootstrap();
