import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AccesoEntity } from "./acceso.entity";
import { PermisoTipoEntity } from "./permiso_tipo.entity";

@Entity({ schema: "mod_sistema", name: "permiso" })
export class PermisoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: false, unique: true })
    sigla: string;

    @Column({ type: "int4", nullable: false })
    acceso_id: number;

    @Column({ type: "int4", nullable: false })
    tipo_id: number;

    @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: string;

    @Column({ type: "bool", nullable: true, default: false })
    eliminado: boolean;

    @ManyToOne(() => AccesoEntity)
    @JoinColumn({ name: "acceso_id" })
    acceso: AccesoEntity;

    @ManyToOne(() => PermisoTipoEntity)
    @JoinColumn({ name: "tipo_id" })
    tipo: PermisoTipoEntity;
}