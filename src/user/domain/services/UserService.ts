import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { v4 as uuid } from 'uuid';
import { User } from "@user/domain/entities/User";
import { CreateUserDto } from "@user/application/dto/CreateUserDto";
import { UserRepository } from "@user/domain/repositories/UserRepository";

const SALT: number = 10;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: Repository<User>
  ) {}

  async getUser(id: string): Promise<User> {
    const data = await this.userRepository.findOne({id: id});

    data.password = "xxxxxxxxxxxxxxx";

    return data;
  }

  async createUser(createUserInput: CreateUserDto): Promise<User> {
    const { name, email, password } = createUserInput;

    const userExists: User = await this.userRepository.findOne({ where: { email } });

    if (userExists) {
      return null
    }

    const bcrypt = require('bcrypt');
    const hash = bcrypt.hashSync(password, SALT);

    const user = this.userRepository.create({
      id: uuid(),
      name,
      email,
      password: hash
    });

    const data = await this.userRepository.save(user);

    data.password = "xxxxxxxxxxxxxxx";

    return data;
  }

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createSkillUser(id: string, skillIds: string[]): Promise<User> {
    const user = await this.userRepository.findOne({id: id});

    user.skills = user.skills != undefined ? [...user.skills, ...skillIds] : skillIds;

    return this.userRepository.save(user);
  }
}
