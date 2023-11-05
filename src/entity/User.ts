import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({ unique: true })
  email: string;

  @Column({
    nullable: true,
  })
  hair_color: string;

  @Column({
    type: "simple-array",
    default: true,
  })
  family_member: string[];
}
