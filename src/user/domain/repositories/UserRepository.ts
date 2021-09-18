import { EntityRepository, Repository } from "typeorm";
import { User } from "@user/domain/entities/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
}