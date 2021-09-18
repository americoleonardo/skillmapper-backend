import {Resolver, Query, Mutation, Args, ResolveField, Parent} from "@nestjs/graphql";
import { CreateUserDto } from "@user/application/dto/CreateUserDto";
import { UserService } from "@user/domain/services/UserService";
import { CreateSkillUserDto } from "@user/application/dto/CreateSkillUserDto";
import {SkillsService} from "../../../../../skills/skills.service";
import {User} from "../../../../domain/entities/User";

@Resolver(of => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private skillService: SkillsService
  ) {
  }

  @Query(returns => User)
  user(
    @Args('id') id: string
  ) {
    return this.userService.getUser(id);
  }

  @Query(returns => [User])
  async users() {
    return this.userService.getUsers()
  }

  @Mutation(returns => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserDto
  ) {
    return this.userService.createUser(createUserInput);
  }

  @Mutation(returns => User)
  addSkillToUser(
    @Args('addSkillToUserInput') addSkillToUserInput: CreateSkillUserDto
  ) {
    const { userId, skillIds } = addSkillToUserInput;

    return this.userService.addSkillToUser(userId, skillIds);
  }

  @ResolveField()
  async skills(@Parent() user: User) {
    return this.skillService.getSkillsByArray(user.skills);
  }
}