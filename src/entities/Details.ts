import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Educations } from "./Educations";
import { Experiences } from "./Experiences";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

@Entity("details", { schema: "cv" })
export class Details {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("text", { name: "summary", nullable: true })
  summary: string | null;

  @Column("varchar", { name: "mobile", nullable: true, length: 30 })
  mobile: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @OneToMany(() => Educations, (educations) => educations.st)
  educations: Educations[];

  @OneToMany(() => Experiences, (experiences) => experiences.st)
  experiences: Experiences[];

  @OneToMany(() => Skills, (skills) => skills.st)
  skills: Skills[];

  @OneToMany(() => Projects, (projects) => projects.st)
  projects: Projects[];
}
