import { UsuarioEstado } from "@db/index";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsuarioService {
    constructor (
        @InjectRepository(UsuarioEstado)
        private readonly usuarioEstadoRepository: Repository<UsuarioEstado>
    ) {}
    
    public async saludo() {
        return this.usuarioEstadoRepository.find();
    }
}