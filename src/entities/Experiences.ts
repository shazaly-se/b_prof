import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Details } from "./Details";

@Index("st_ex_fk", ["st_id"], {})
@Entity("experiences", { schema: "cv" })
export class Experiences {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "st_id", nullable: true })
  st_id: number | null;

  @Column("varchar", { name: "dur", nullable: true, length: 50 })
  dur: string | null;

  @Column("varchar", { name: "company", nullable: true, length: 50 })
  company: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 50 })
  title: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

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

  @ManyToOne(() => Details, (details) => details.experiences, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "st_id", referencedColumnName: "id" }])
  st: Details;
}
