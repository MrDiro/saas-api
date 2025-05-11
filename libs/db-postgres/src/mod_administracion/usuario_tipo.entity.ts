import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "mod_administracion", name: "usuario_tipo" })
export class UsuairoTipoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: true })
    sigla: string;

    @Column({ type: "varchar", nullable: false })
    nombre: string;

    @Column({ type: "timestamptz", nullable: true, default: "now()" })
    fecha_creacion: Date;

    @Column({ type: "bool", nullable: true, default: false })
    eliminado: boolean;
}