import { Module } from '@nestjs/common';
import { SkillResolver } from "@skill/adapters/graphql/resolvers/SkillResolver";
import { SkillService } from '@skill/domain/services/SkillService';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Skill } from "@skill/domain/entities/Skill";

@Module({
  imports: [
    TypeOrmModule.forFeature([ Skill ])
  ],
  providers: [ SkillResolver, SkillService ],
  exports: [ SkillService ]
})
export class SkillModule {}
