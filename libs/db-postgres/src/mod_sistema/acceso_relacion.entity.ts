import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AccesoEntity } from "./acceso.entity";

@Entity({ schema: "mod_sistema", name: "acceso_relacion" })
export class AccesoRelacionEntity {
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

    @ManyToOne(() => AccesoEntity)
    @JoinColumn({ name: "acceso_id" })
    acceso: AccesoEntity;

    @ManyToOne(() => AccesoEntity)
    @JoinColumn({ name: "acceso_id_dep" })
    acceso_dep: AccesoEntity;
}