import { Field, InputType, ID } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class AddSkillToUserInput {
  @Field(type => ID)
  @IsUUID()
  userId: string;

  @IsUUID("4", {each: true})
  @Field(type => [ID])
  skillIds: string[];
}