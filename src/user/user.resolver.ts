import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UserType} from "./user.type";
import { CreateUserInput } from "./user.input";
import { UserService } from "./user.service";

@Resolver(of => UserType)
export class UserResolver {
  constructor(
    private userService: UserService
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
}