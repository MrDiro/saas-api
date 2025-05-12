import { IsBoolean, IsDate, IsInt, IsOptional, IsString, Length, IsNotEmpty } from "class-validator";

export class CreateUsuarioDto {
    @IsOptional()
    @IsInt()
    cuenta_id: number;

    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    alias: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    clave: string;

    @IsOptional()
    @IsInt()
    persona_id: number;

    @IsNotEmpty()
    @IsInt()
    estado_id: number;

    @IsNotEmpty()
    @IsInt()
    tipo_id: number;

    @IsOptional()
    @IsDate()
    correo_fecha_verificacion: Date;

    @IsOptional()
    @IsBoolean()
    acepta_terminos: boolean;

    @IsOptional()
    @IsBoolean()
    acepta_marketing: boolean;

    @IsOptional()
    @IsInt()
    intentos_fallidos: number;

    @IsOptional()
    @IsDate()
    bloqueo_hasta: Date;

    @IsOptional()
    @IsDate()
    ultimo_login: Date;

    @IsOptional()
    @IsString()
    ip_ultimo_login: string;

    @IsOptional()
    @IsString()
    agente_ultimo_login: string;

    @IsOptional()
    @IsString()
    token_recuperacion: string;

    @IsOptional()
    @IsDate()
    token_expira: Date;

    @IsOptional()
    @IsBoolean()
    es_titular_cuenta: boolean;

    @IsOptional()
    @IsBoolean()
    es_admin: boolean;

    @IsOptional()
    @IsBoolean()
    tiene_2fa: boolean;

    @IsOptional()
    @IsDate()
    fecha_edicion: Date;

    @IsOptional()
    @IsDate()
    fecha_creacion: Date;

    @IsOptional()
    @IsInt()
    editado_por: number;

    @IsOptional()
    @IsInt()
    creado_por: number;

    @IsOptional()
    @IsBoolean()
    eliminado: boolean;
}