import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Skills')
export class SkillsType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  timestamp: string;
}