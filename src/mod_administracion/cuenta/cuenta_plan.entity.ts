import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "mod_administracion", name: "cuenta_plan" })
export class CuentaPlanEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: true, unique: true })
    sigla: string;

    @Column({ type: "varchar", nullable: false })
    nombre: string;

    @Column({ type: "numeric", precision: 10, scale: 2, nullable: false, default: 0 })
    precio_mensual: number;

    @Column({ type: "int4", nullable: true })
    limite_usuarios: number;

    @Column({ type: "bool", nullable: true, default: false })
    permite_api: boolean;

    @Column({ type: "bool", nullable: true, default: false })
    permite_soporte: boolean;

    @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: string;

    @Column({ type: "bool", nullable: true, default: false })
    eliminado: boolean;
}