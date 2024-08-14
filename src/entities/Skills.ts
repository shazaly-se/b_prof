import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Details } from "./Details";

@Index("st_fk", ["st_id"], {})
@Entity("skills", { schema: "cv" })
export class Skills {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "st_id", nullable: true })
  st_id: number | null;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;

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

  @ManyToOne(() => Details, (details) => details.skills, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "st_id", referencedColumnName: "id" }])
  st: Details;
}
