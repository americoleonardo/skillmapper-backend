import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Skill } from "@skill/domain/entities/Skill";
import { Repository } from "typeorm";
import { v4 as uuid } from 'uuid';
import { CreateSkillDto } from "@skill/adapters/dto/CreateSkillDto";

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private skillsRepository: Repository<Skill>
  ) {}

  getSkill(id: string): Promise<Skill> {
    return this.skillsRepository.findOne({id: id});
  }

  getSkills(): Promise<Skill[]> {
    return this.skillsRepository.find();
  }

  createSkill(createSkillDto: CreateSkillDto): Promise<Skill> {
    const { name, timestamp } = createSkillDto;

    const skill = this.skillsRepository.create({
      id: uuid(),
      name,
      timestamp
    });

    return this.skillsRepository.save(skill);
  }

  async getSkillsByArray(skillIds: string[]): Promise<Skill[]> {
    return this.skillsRepository.find({
      where: {
        id: {
          $in: skillIds
        }
      }
    });
  }
}
