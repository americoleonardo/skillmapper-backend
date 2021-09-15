import { Field, ID, ObjectType } from "@nestjs/graphql";
import {SkillsType} from "../skills/skills.type";

@ObjectType('User')
export class UserType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(type => [SkillsType])
  skills: string[]
}