import { Field, InputType } from "@nestjs/graphql";
import { IsDateString, MinLength } from "class-validator";

@InputType()
export class CreateSkillInput {
  @MinLength(3)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  timestamp: string;
}