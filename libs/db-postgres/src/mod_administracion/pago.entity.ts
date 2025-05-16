import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PagoMonedaEntity } from "./pago_moneda.entity";
import { PagoMetodoEntity } from "./pago_metodo.entity";
import { SuscripcionEntity } from "./suscripcion.entity";

@Entity({ schema: "mod_administracion", name: "pago" })
export class PagoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int4", nullable: false })
    suscripcion_id: number;

    @Column({ type: "varchar", nullable: false, unique: true })
    epayco_ref: string;

    @Column({ type: "varchar", nullable: true })
    epayco_transaction: string;

    @Column({ type: "varchar", nullable: true })
    epayco_estado: string;

    @Column({ type: "numeric", precision: 10, scale: 2, nullable: true })
    monto: number;

    @Column({ type: "int4", nullable: false })
    moneda_id: number;

    @Column({ type: "int4", nullable: false })
    metodo_id: number;

    @Column({ type: "timestamptz", nullable: true })
    fecha_pago: string;

    @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: string;

    @Column({ type: "bool", nullable: true, default: false })
    eliminado: boolean;

    @ManyToOne(() => PagoMonedaEntity)
    @JoinColumn({ name: "moneda_id" })
    modena: PagoMonedaEntity

    @ManyToOne(() => PagoMetodoEntity)
    @JoinColumn({ name: "metodo_id" })
    metodo: PagoMetodoEntity;

    @ManyToOne(() => SuscripcionEntity)
    @JoinColumn({ name: "suscripcion_id" })
    suscripcion: SuscripcionEntity;
}