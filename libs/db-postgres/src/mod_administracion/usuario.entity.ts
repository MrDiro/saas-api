import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioEstadoEntity } from "./usuario_estado.entity";

@Entity({ schema: "mod_administracion", name: "usuario" })
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int4", nullable: true })
    cuenta_id: number;

    @Column({ type: "varchar", nullable: false })
    alias: string;

    @Column({ type: "varchar", nullable: false })
    clave: string;

    @Column({ type: "int4", nullable: true })
    persona_id: number;

    @Column({ type: "int4", nullable: false })
    estado_id: number;

    @Column({ type: "int4", nullable: false })
    tipo_id: number;

    @Column({ type: "timestamptz", nullable: true })
    correo_fecha_verificacion: Date;

    @Column({ type: "bool", nullable: true })
    acepta_terminos: boolean;

    @Column({ type: "bool", nullable: true })
    acepta_marketing: boolean;

    @Column({ type: "int4", nullable: true, default: 0 })
    intentos_fallidos: number;

    @Column({ type: "timestamptz", nullable: true })
    bloqueo_hasta: Date;

    @Column({ type: "timestamptz", nullable: true })
    ultimo_login: Date;

    @Column({ type: "inet", nullable: true })
    ip_ultimo_login: string;

    @Column({ type: "text", nullable: true })
    agente_ultimo_login: string;

    @Column({ type: "text", nullable: true })
    token_recuperacion: string;

    @Column({ type: "timestamptz", nullable: true })
    token_expira: Date;

    @Column({ type: "bool", nullable: true })
    es_titular_cuenta: boolean;

    @Column({ type: "bool", nullable: true })
    es_admin: boolean;

    @Column({ type: "bool", nullable: true })
    tiene_2fa: boolean;

    @Column({ type: "timestamptz", nullable: true })
    fecha_edicion: Date;

    @Column({ type: "timestamptz", nullable: true })
    fecha_creacion: Date;

    @Column({ type: "int4", nullable: true })
    editado_por: number;

    @Column({ type: "int4", nullable: true })
    creado_por: number;

    @Column({ type: "bool", nullable: true })
    eliminado: boolean;

    @OneToOne(() => UsuarioEstadoEntity)
    @JoinColumn({ name: "estado_id" })
    estado: UsuarioEstadoEntity;
}
