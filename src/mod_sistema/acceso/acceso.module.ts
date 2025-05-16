import { AccesoRlAccesoEntity } from "@db/mod_sistema/acceso_rl_acceso.entity";
import { AccesoTipoEntity } from "@db/mod_sistema/acceso_tipo.entity";
import { AccesoEntity } from "@db/mod_sistema/acceso.entity";
import { AccesoController } from "./acceso.controller";
import { AccesoService } from "./acceso.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            AccesoTipoEntity,
            AccesoEntity,
            AccesoRlAccesoEntity,
        ])
    ],
    controllers: [
        AccesoController
    ],
    providers: [
        AccesoService
    ]
})
export class AccesoModule { }