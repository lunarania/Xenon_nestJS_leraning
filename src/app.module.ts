import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module'; // Import it only once

@Module({
  imports: [PrismaModule, ArticlesModule], // Only one reference to ArticlesModule
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
