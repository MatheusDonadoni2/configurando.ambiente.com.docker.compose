import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'myPOSTGRES_USER',
      password: 'myPOSTGRES_PASSWORD',
      database: 'myPOSTGRES_DB',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
