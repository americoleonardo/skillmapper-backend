import { Module } from '@nestjs/common';
import { UserService } from '@user/domain/services/UserService';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@user/domain/entities/User";
import { UserResolver } from "@user/application/adapters/graphql/resolvers/UserResolver";
import { SkillModule } from "@skill/skill.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([ User ]),
    SkillModule
  ],
  providers: [ UserResolver, UserService ]
})
export class UserModule {}
