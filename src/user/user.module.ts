import { Module } from '@nestjs/common';
import { UserService } from './domain/services/UserService';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./domain/entities/User";
import { UserResolver } from "./application/adapters/graphql/resolvers/UserResolver";
import { SkillsModule } from "../skills/skills.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([ User ]),
    SkillsModule
  ],
  providers: [ UserResolver, UserService ]
})
export class UserModule {}
