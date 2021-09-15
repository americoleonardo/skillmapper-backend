import { Field, InputType, ID } from "@nestjs/graphql";
import {IsEmail, IsNotEmpty, IsUUID, MinLength} from "class-validator";

@InputType()
export class CreateUserInput {
  @MinLength(3)
  @Field()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @Field()
  @IsNotEmpty()
  email: string;

  @MinLength(8)
  @Field()
  @IsNotEmpty()
  password: string

  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  skillsIds: string[]
}