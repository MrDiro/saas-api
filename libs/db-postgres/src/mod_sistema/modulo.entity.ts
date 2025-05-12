import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "mod_sistema", name: "modulo" })
export class ModuloEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: true, unique: true })
    sigla: string;

    @Column({ type: "varchar", nullable: false })
    nombre: string;

    @Column({ type: "varchar", nullable: false })
    esquema: string;

    @Column({ type: "bool", nullable: true, default: false })
    es_base: boolean;

    @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: string;

    @Column({ type: "bool", nullable: true, default: false })
    eliminado: boolean;
}