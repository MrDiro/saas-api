import { UsuairoTipoEntity } from "@db/mod_administracion/usuario_tipo.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioEstadoEntity } from "@db/index";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class UsuarioService {
    constructor (
        @InjectRepository(UsuarioEstadoEntity)
        private readonly usuarioEstadoRepository: Repository<UsuarioEstadoEntity>,
        @InjectRepository(UsuairoTipoEntity)
        private readonly usuarioTipoRepository: Repository<UsuairoTipoEntity>
    ) {}
    
    public async estados() {
        return this.usuarioEstadoRepository.find({
            select: ["id", "sigla", "nombre"],
            where: { eliminado: false }
        });
    }

    public async tipos() {
        return this.usuarioTipoRepository.find({
            select: ["id", "sigla", "nombre"],
            where: { eliminado: false }
        });
    }

    public async guardar() {

    }
}