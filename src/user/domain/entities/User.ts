import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';
import {Field, ID, ObjectType} from "@nestjs/graphql";
import {SkillsType} from "../../../skills/skills.type";

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
  @Field(type => [SkillsType])
  skills: string[];
}
