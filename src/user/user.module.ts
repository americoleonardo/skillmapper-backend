import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UserResolver } from "./user.resolver";
import { SkillsModule } from "../skills/skills.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([ User ]),
    SkillsModule
  ],
  providers: [UserResolver, UserService]
})
export class UserModule {}
