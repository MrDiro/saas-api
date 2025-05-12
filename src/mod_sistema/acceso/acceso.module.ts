import { AccesoTipoEntity } from "@db/mod_sistema/acceso_tipo";
import { AccesoController } from "./acceso.controller";
import { AccesoService } from "./acceso.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            AccesoTipoEntity
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