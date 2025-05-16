import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UbicacionTipoEntity } from "./ubicacion_tipo.entity";

@Entity({ schema: "mod_sistema", name: "ubicacion" })
export class UbicacionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: true, unique: true})
    sigla: string;

    @Column({ type: "varchar", nullable: false })
    nombre: string;

    @Column({ type: "int4", nullable: false })
    tipo_id: number;

    @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: string;

    @Column({ type: "bool", nullable: true, default: false })
    eliminado: boolean;

    @ManyToOne(() => UbicacionTipoEntity)
    @JoinColumn({ name: "tipo_id" })
    tipo: UbicacionTipoEntity;
}