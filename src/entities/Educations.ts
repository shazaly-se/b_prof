import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Details } from "./Details";

@Index("st_ed_fk", ["st_id"], {})
@Entity("educations", { schema: "cv" })
export class Educations {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "st_id", nullable: true })
  st_id: number | null;

  @Column("varchar", { name: "school", nullable: true, length: 50 })
  school: string | null;

  @Column("varchar", { name: "location", nullable: true, length: 50 })
  location: string | null;

  @Column("varchar", { name: "degree", nullable: true, length: 50 })
  degree: string | null;

  @Column("varchar", { name: "year", nullable: true, length: 30 })
  year: string | null;

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

  @ManyToOne(() => Details, (details) => details.educations, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "st_id", referencedColumnName: "id" }])
  st: Details;
}
