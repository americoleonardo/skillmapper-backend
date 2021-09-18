import { Field, InputType, ID } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class CreateSkillUserDto {
  @Field(type => ID)
  @IsUUID()
  userId: string;

  @IsUUID("4", {each: true})
  @Field(type => [ID])
  skillIds: string[];
}