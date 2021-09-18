import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SkillsModule } from './skills/skills.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Skills } from "./skills/skills.entity";
import { UserModule } from './user/user.module';
import { User } from "./user/domain/entities/User";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'skills',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [ Skills, User ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    SkillsModule,
    UserModule
  ]
})
export class AppModule {}
