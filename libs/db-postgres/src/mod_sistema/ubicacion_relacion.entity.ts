import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UbicacionEntity } from "./ubicacion.entity";

@Entity({ schema: "mod_sistema", name: "ubicacion_relacion" })
export class UbicacionRelacionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int4", nullable: false })
    ubicacion_id: number;

    @Column({ type: "int4", nullable: false })
    ubicacion_id_dep: number;

    @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: string;

    @Column({ type: "bool", nullable: true, default: false })
    eliminado: boolean;

    @ManyToOne(() => UbicacionEntity)
    @JoinColumn({ name: "ubicacion_id" })
    ubicacion: UbicacionEntity;

    @ManyToOne(() => UbicacionEntity)
    @JoinColumn({ name: "ubicacion_id_dep" })
    ubicacion_dep: UbicacionEntity;
}