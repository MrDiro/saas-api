// import { UsuairoTipoEntity } from "@db/mod_administracion/usuario_tipo.entity";
// import { UsuarioController } from "@api/modulo/usuario/usuario.controller";
// import { UsuarioEntity } from "@db/mod_administracion/usuario.entity";
// import { UsuarioService } from "@api/modulo/usuario/usuario.service";
// import { UsuarioEstadoEntity } from "@db/index";
// import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

@Module({
    imports: [ 
        // TypeOrmModule.forFeature([
        //     UsuarioEstadoEntity,
        //     UsuairoTipoEntity,
        //     UsuarioEntity
        // ]) 
    ],
    // controllers: [ UsuarioController ],
    // providers: [ UsuarioService ],
    // exports: [ TypeOrmModule ]
})
export class UsuarioModule {}