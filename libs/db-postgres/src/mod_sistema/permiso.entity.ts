import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "mod_sistema", name: "permiso" })
export class PermisoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: false, unique: true })
    sigla: string;

    
    acceso_id: number;
    tipo_id: number;
    fecha_creacion: string;
    eliminado: boolean;
}