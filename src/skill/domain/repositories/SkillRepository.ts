import { EntityRepository, Repository } from "typeorm";
import { Skill } from "@skill/domain/entities/Skill";

@EntityRepository(Skill)
export class SkillRepository extends Repository<Skill> {
}