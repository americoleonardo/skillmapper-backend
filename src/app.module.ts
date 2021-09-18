import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SkillModule } from '@skill/skill.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { Skill } from "@skill/domain/entities/Skill";
import { UserModule } from '@user/user.module';
import { User } from "@user/domain/entities/User";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'skills',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [ Skill, User ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    SkillModule,
    UserModule
  ]
})

export class AppModule {}