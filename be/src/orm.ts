import { TypeOrmModule } from '@nestjs/typeorm';

export const mysqlOrm = TypeOrmModule.forRoot({
  type: 'mysql',
  host: '192.168.0.103',
  port: 3306,
  username: 'root',
  password: '12345678',
  database: '5g_docking',
  autoLoadEntities: true,
  synchronize: false,
});
