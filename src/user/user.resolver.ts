import {Resolver, Query, Mutation, Args, ResolveField, Parent} from "@nestjs/graphql";
import { UserType} from "./user.type";
import { CreateUserInput } from "./user.input";
import { UserService } from "./user.service";
import {AddSkillToUserInput} from "./add-skill.input";
import {SkillsService} from "../skills/skills.service";
import {User} from "./user.entity";

@Resolver(of => UserType)
export class UserResolver {
  constructor(
    private userService: UserService,
    private skillService: SkillsService
  ) {
  }

  @Query(returns => UserType)
  user(
    @Args('id') id: string
  ) {
    return this.userService.getUser(id);
  }

  @Query(returns => [UserType])
  async users() {
    return this.userService.getUsers()
  }

  @Mutation(returns => UserType)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput
  ) {
    return this.userService.createUser(createUserInput);
  }

  @Mutation(returns => UserType)
  addSkillToUser(
    @Args('addSkillToUserInput') addSkillToUserInput: AddSkillToUserInput
  ) {
    const { userId, skillIds } = addSkillToUserInput;

    return this.userService.addSkillToUser(userId, skillIds);
  }

  @ResolveField()
  async skills(@Parent() user: User) {
    return this.skillService.getSkillsByArray(user.skills);
  }
}