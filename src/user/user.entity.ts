import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';

@Entity({name: "users"})
export class User {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  skills: string[];
}