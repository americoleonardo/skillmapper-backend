import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { CreateUserDto } from "@user/application/dto/CreateUserDto";
import { UserService } from "@user/domain/services/UserService";
import { CreateSkillUserDto } from "@user/application/dto/CreateSkillUserDto";
import { SkillService } from "@skill/domain/services/SkillService";
import { User } from "@user/domain/entities/User";

@Resolver(of => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private skillService: SkillService
  ) {
  }

  @Query(returns => User, { nullable: true })
  user(
    @Args('id') id: string
  ) {
    return this.userService.getUser(id);
  }

  @Query(returns => [User])
  async users() {
    return this.userService.getUsers()
  }

  @Mutation(returns => User, { nullable: true })
  createUser(
    @Args('createUserDto') createUserDto: CreateUserDto
  ) {
    return this.userService.createUser(createUserDto);
  }

  @Mutation(returns => User)
  createSkillUser(
    @Args('createSkillUserDto') createSkillUserDto: CreateSkillUserDto
  ) {
    const { userId, skillIds } = createSkillUserDto;

    return this.userService.createSkillUser(userId, skillIds);
  }

  @ResolveField()
  async skills(@Parent() user: User) {
    return this.skillService.getSkillsByArray(user.skills);
  }
}