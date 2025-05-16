import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CuentaPlanEntity } from "./cuenta_plan.entity";
import { ModuloEntity } from "@db/mod_sistema/modulo.entity";

@Entity({ schema: "mod_administracion", name: "cuenta_plan_rl_modulo" })
export class CuentaPlanRlModuloEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int4", nullable: false })
    cuenta_plan_id: number;

    @Column({ type: "int4", nullable: false })
    modulo_id: number;

    @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: string;

    @Column({ type: "bool", nullable: true, default: false })
    eliminado: boolean;

    @ManyToOne(() => CuentaPlanEntity)
    @JoinColumn({ name: "cuenta_plan_id" })
    cuenta_plan: CuentaPlanEntity;

    @ManyToOne(() => ModuloEntity)
    @JoinColumn({ name: "modulo_id" })
    modulo: ModuloEntity;
}