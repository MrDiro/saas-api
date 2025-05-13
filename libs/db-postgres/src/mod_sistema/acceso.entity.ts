import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ModuloEntity } from "./modulo.entity";
import { AccesoTipoEntity } from "./acceso_tipo.entity";

@Entity({ schema: "mod_sistema", name: "acceso" })
export class AccesoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: true, unique: true })
    sigla: string;

    @Column({ type: "int4", nullable: false })
    modulo_id: number;

    @Column({ type: "varchar", nullable: false })
    nombre: string;

    @Column({ type: "text", nullable: true })
    ruta: string;

    @Column({ type: "varchar", nullable: true })
    icono: string;

    @Column({ type: "int4", nullable: false })
    orden: number;

    @Column({ type: "bool", nullable: true, default: false })
    es_favoritable: boolean;

    @Column({ type: "int4", nullable: false })
    tipo_id: number;

    @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: string;

    @Column({ type: "bool", nullable: true, default: false })
    eliminado: boolean;

    @ManyToOne(() => ModuloEntity)
    @JoinColumn({ name: "modulo_id" })
    modulo: ModuloEntity;

    @ManyToOne(() => AccesoTipoEntity)
    @JoinColumn({ name: "tipo_id"})
    tipo: AccesoTipoEntity;
}