import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "mod_administracion", name: "pago_metodo" })
export class PagoMetodoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: true, unique: true })
    sigla: string;

    @Column({ type: "varchar", nullable: false })
    descripcion: string;

    @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: string;

    @Column({ type: "bool", nullable: true, default: false })
    eliminado: boolean;
}