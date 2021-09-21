import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { SkillService } from "@skill/domain/services/SkillService";
import { CreateSkillDto } from "@skill/adapters/dto/CreateSkillDto";
import { Skill } from "@skill/domain/entities/Skill";

@Resolver(of => Skill)
export class SkillResolver {
  constructor(
    private skillService: SkillService
  ) {
  }

  @Query(returns => Skill)
  skill(
    @Args('id') id: string
  ) {
    return this.skillService.getSkill(id);
  }

  @Query(returns => [Skill])
  skills() {
    return this.skillService.getSkills()
  }

  @Mutation(returns => Skill)
  createSkill(
    @Args('createSkillDto') createSkillDto: CreateSkillDto
  ) {
    return this.skillService.createSkill(createSkillDto);
  }
}