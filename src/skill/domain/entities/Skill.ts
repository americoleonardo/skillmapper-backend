import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';
import { Field, ID, ObjectType } from "@nestjs/graphql";

@Entity({name: "skills"})
@ObjectType('Skills')
export class Skill {
  @ObjectIdColumn()
  _id: string;

  @Field(type => ID)
  @PrimaryColumn()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  timestamp: string;
}
