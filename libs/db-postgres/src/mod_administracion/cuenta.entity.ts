import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CuentaEstadoEntity } from "./cuenta_estado.entity";
import { CuentaPlanEntity } from "./cuenta_plan.entity";

@Entity({ schema: "mod_administracion", name: "cuenta" })
export class CuentaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: false, unique: true })
    codigo: string;

    @Column({ type: "int4", nullable: false })
    plan_id: number;

    @Column({ type: "int4", nullable: false })
    estado_id: number;

    @Column({ type: "varchar", nullable: false, unique: true })
    epayco_cliente: number;

    @Column({ type: "varchar", nullable: true })
    epayco_email: string;

    @Column({ type: "timestamptz", nullable: true })
    fecha_edicion: string;

    @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: string;

    @Column({ type: "bool", nullable: true, default: false })
    eliminado: boolean;

    @ManyToOne(() => CuentaPlanEntity)
    @JoinColumn({ name: "plan_id" })
    plan: CuentaPlanEntity;

    @ManyToOne(() => CuentaEstadoEntity)
    @JoinColumn({ name: "estado_id" })
    estado: CuentaEstadoEntity;
}