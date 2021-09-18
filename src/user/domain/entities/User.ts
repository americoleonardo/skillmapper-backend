import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Skill } from "@skill/domain/entities/Skill";

@Entity({name: "users"})
@ObjectType('User')
export class User {
  @ObjectIdColumn()
  _id: string;

  @Field(type => ID)
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;

  @Column()
  @Field(type => [Skill])
  skills: string[];
}
