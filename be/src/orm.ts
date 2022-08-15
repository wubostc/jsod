import { TypeOrmModule } from '@nestjs/typeorm';

const host = process.env.MYSQL_HOST;
const port = process.env.MYSQL_PORT;
const username = process.env.MYSQL_USERNAME;
const password = process.env.MYSQL_POSSWORD;
const database = process.env.MYSQL_DATABASE;

export const mysqlOrm = TypeOrmModule.forRoot({
  type: 'mysql',
  host,
  port: +port,
  username,
  password,
  database,
  autoLoadEntities: true,
  synchronize: false,
});
