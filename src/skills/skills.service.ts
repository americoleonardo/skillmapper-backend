import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Skills } from "./skills.entity";
import { Repository } from "typeorm";
import { v4 as uuid } from 'uuid';
import {CreateSkillInput} from "./skills.input";

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skills)
    private skillsRepository: Repository<Skills>
  ) {}

  getSkill(id: string): Promise<Skills> {
    return this.skillsRepository.findOne({id: id});
  }

  getSkills(): Promise<Skills[]> {
    return this.skillsRepository.find();
  }

  createSkill(createSkillInput: CreateSkillInput): Promise<Skills> {
    const { name, timestamp } = createSkillInput;
    const skill = this.skillsRepository.create({
      id: uuid(),
      name,
      timestamp
    });

    return this.skillsRepository.save(skill);
  }
}
