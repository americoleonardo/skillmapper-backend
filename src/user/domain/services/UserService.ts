import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { v4 as uuid } from 'uuid';
import { User } from "../entities/User";
import { CreateUserDto } from "../../application/dto/CreateUserDto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  getUser(id: string): Promise<User> {
    return this.userRepository.findOne({id: id});
  }

  async createUser(createUserInput: CreateUserDto): Promise<User> {
    const { name, email, password } = createUserInput;
    const user = this.userRepository.create({
      id: uuid(),
      name,
      email,
      password
    });

    return this.userRepository.save(user);
  }

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async addSkillToUser(id: string, skillIds: string[]): Promise<User> {
    const user = await this.userRepository.findOne({id: id});

    user.skills = user.skills != undefined ? [...user.skills, ...skillIds] : skillIds;

    return this.userRepository.save(user);
  }
}
