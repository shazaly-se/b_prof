import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Details } from "./Details";
  
  @Index("st_pr_fk", ["st_id"], {})
  @Entity("projects", { schema: "cv" })
  export class Projects {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;
  
    @Column("int", { name: "st_id", nullable: true })
    st_id: number | null;
  
    @Column("varchar", { name: "title", nullable: true, length: 50 })
    title: string | null;

    @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "url", nullable: true, length: 100 })
    url: string | null;
    @Column("varchar", { name: "image", nullable: true, length: 50 })
    image: string | null;
  
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
  
    @ManyToOne(() => Details, (details) => details.projects, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "st_id", referencedColumnName: "id" }])
    st: Details;
  }
  