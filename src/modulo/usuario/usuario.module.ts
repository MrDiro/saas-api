import { UsuarioController } from "@api/modulo/usuario/usuario.controller";
import { UsuarioService } from "@api/modulo/usuario/usuario.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioEstado } from "@db/index";
import { Module } from "@nestjs/common";

@Module({
    imports: [ TypeOrmModule.forFeature([UsuarioEstado]) ],
    controllers: [ UsuarioController ],
    providers: [ UsuarioService ],
    exports: [ TypeOrmModule ]
})
export class UsuarioModule {}