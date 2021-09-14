import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

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
}