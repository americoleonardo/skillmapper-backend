/*
* 1 CONFIGURAR AQUI
* */

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SkillsModule } from './skills/skills.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Skills } from "./skills/skills.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'skills',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [ Skills ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    SkillsModule
  ]
})
export class AppModule {}
