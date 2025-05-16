import { UsuairoTipoEntity } from "@db/mod_administracion/usuario_tipo.entity";
import { UsuarioEntity } from "@db/mod_administracion/usuario.entity";
import { CreateUsuarioDto } from "./usuario.validator";
import { UsuarioEstadoEntity } from "@db/index";
import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsuarioService {
    constructor (private readonly dataSource: DataSource) {}
    
    public async estados() {
        return await this.dataSource.getRepository(UsuarioEstadoEntity)
            .createQueryBuilder("est")
            .select(["est.id", "est.sigla", "est.nombre"])
            .where("est.eliminado = :eliminado", { eliminado: false })
            .getMany();
    }

    public async tipos() {
        return await this.dataSource.getRepository(UsuairoTipoEntity)
            .createQueryBuilder("tp")
            .select(["tp.id", "tp.sigla", "tp.nombre"])
            .where("tp.eliminado = :eliminado", { eliminado: false })
            .getMany();
    }

    public async guardar(data: CreateUsuarioDto) {
        const hash = bcrypt.hashSync(data.clave, 10);
        data.clave = hash;

        return this.dataSource.transaction(async (transaction) => {
            return await transaction.save(UsuarioEntity, data);
        });
    }

    public async usuario() {
        return await this.dataSource.getRepository(UsuarioEntity)
            .createQueryBuilder("usu")
            .innerJoinAndSelect("usu.estado", "est")
            .select([
                "usu.id", "usu.cuenta_id", "usu.alias", "usu.persona_id", "usu.estado",
                "usu.tipo_id", "usu.correo_fecha_verificacion", "usu.acepta_terminos",
                "usu.acepta_marketing", "usu.intentos_fallidos", "usu.bloqueo_hasta",
                "usu.ultimo_login", "usu.ip_ultimo_login", "usu.agente_ultimo_login",
                "usu.token_recuperacion", "usu.token_expira", "usu.es_titular_cuenta",
                "usu.es_admin", "usu.tiene_2fa", "usu.fecha_edicion", "usu.fecha_creacion",
                "usu.editado_por", "usu.creado_por", "est.id", "est.nombre"
            ])
            .where("usu.eliminado = :eliminado", { eliminado: false })
            .getOne()
    }
}