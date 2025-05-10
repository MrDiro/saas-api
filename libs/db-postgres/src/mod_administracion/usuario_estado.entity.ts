import { Column, Entity } from "typeorm";

@Entity({ schema: "mod_administracion" })
export class UsuarioEstado {

    @Column({
        type: "int4",
        primary: true,
        generated: true,
        nullable: false,
    })
    id: number;

    @Column({
        type: "varchar",
        nullable: true
    })
    sigla: string;

    @Column({
        type: "varchar",
        nullable: false
    })
    nombre: string;

    @Column({
        type: "timestamptz",
        nullable: true,
        default: "now()"
    })
    fecha_creacion: Date;

    @Column({
        type: "boolean",
        nullable: true,
        default: false
    })
    eliminado: boolean;
}