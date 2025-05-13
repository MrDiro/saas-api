import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "mod_sistema", name: "rel_acceso" })
export class RelAccesoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int4", nullable: false })
    acceso_id: number;

    @Column({ type: "int4", nullable: false })
    acceso_id_dep: number;

    @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: string;

    @Column({ type: "bool", nullable: true, default: false })
    eliminado: boolean;
}