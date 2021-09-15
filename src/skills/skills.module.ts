import { Module } from '@nestjs/common';
import { SkillsResolver } from "./skills.resolver";
import { SkillsService } from './skills.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { Skills } from "./skills.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ Skills ])
  ],
  providers: [ SkillsResolver, SkillsService ],
  exports: [ SkillsService ]
})
export class SkillsModule {}
