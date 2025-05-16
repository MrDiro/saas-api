import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CuentaEntity } from "./cuenta.entity";

@Entity({ schema: "mod_administracion", name: "suscripcion" })
export class SuscripcionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int4", nullable: false })
    cuenta_id: number;

    @Column({ type: "varchar", nullable: false, unique: true })
    epayco_suscripcion: string;

    @Column({ type: "varchar", nullable: false })
    epayco_plan: string;

    @Column({ type: "varchar", nullable: true })
    epayco_estado: string;

    @Column({ type: "timestamptz", nullable: true })
    fecha_inicio: string;

    @Column({ type: "timestamptz", nullable: true })
    fecha_renovacion: string;

    @Column({ type: "boolean", nullable: true, default: false })
    cancelada: boolean;

    @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: string;

    @Column({ type: "bool", nullable: true, default: false })
    eliminado: boolean;

    @ManyToOne(() => CuentaEntity)
    @JoinColumn({ name: "cuenta_id" })
    cuenta:CuentaEntity;
}