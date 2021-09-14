import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { SkillsType } from "./skills.type";
import {SkillsService} from "./skills.service";
import {CreateSkillInput} from "./skills.input";

@Resolver(of => SkillsType)
export class SkillsResolver {
  constructor(
    private skillsService: SkillsService
  ) {
  }

  @Query(returns => SkillsType)
  skill(
    @Args('id') id: string
  ) {
    return this.skillsService.getSkill(id);
  }

  @Query(returns => [SkillsType])
  skills() {
    return this.skillsService.getSkills()
  }

  @Mutation(returns => SkillsType)
  createSkill(
    @Args('createSkillInput') createSkillInput: CreateSkillInput,

  ) {
    return this.skillsService.createSkill(createSkillInput);
  }
}