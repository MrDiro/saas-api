import { PermisoTipoEntity } from "@db/mod_sistema/permiso_tipo.entity";
import { PermisoEntity } from "@db/mod_sistema/permiso.entity";
import { PermisoController } from "./permiso.controller";
import { PermisoService } from "./permiso.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            PermisoTipoEntity,
            PermisoEntity,
        ])
    ],
    controllers: [
        PermisoController
    ],
    providers: [
        PermisoService
    ]
})
export class PermisoModulo { }