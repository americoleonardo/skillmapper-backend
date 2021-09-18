import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Skill } from "@skill/domain/entities/Skill";
import { Repository } from "typeorm";
import { v4 as uuid } from 'uuid';
import { CreateSkillDto } from "@skill/adapters/dto/CreateSkillDto";
import { SkillRepository } from "@skill/domain/repositories/SkillRepository";

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(SkillRepository)
    private skillRepository: Repository<Skill>
  ) {}

  getSkill(id: string): Promise<Skill> {
    return this.skillRepository.findOne({id: id});
  }

  getSkills(): Promise<Skill[]> {
    return this.skillRepository.find();
  }

  createSkill(createSkillDto: CreateSkillDto): Promise<Skill> {
    const { name, timestamp } = createSkillDto;

    const skill = this.skillRepository.create({
      id: uuid(),
      name,
      timestamp
    });

    return this.skillRepository.save(skill);
  }

  async getSkillsByArray(skillIds: string[]): Promise<Skill[]> {
    return this.skillRepository.find({
      where: {
        id: {
          $in: skillIds
        }
      }
    });
  }
}
