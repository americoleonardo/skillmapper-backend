import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { v4 as uuid } from 'uuid';
import {User} from "./user.entity";
import {CreateUserInput} from "./user.input";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  getUser(id: string): Promise<User> {
    return this.userRepository.findOne({id: id});
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
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
}
