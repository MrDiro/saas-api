import { UbicacionRelacionEntity } from "@db/mod_sistema/ubicacion_rl_ubicacion.entity";
import { UbicacionTipoEntity } from "@db/mod_sistema/ubicacion_tipo.entity";
import { UbicacionEntity } from "@db/mod_sistema/ubicacion.entity";
import { UbicacionController } from "./ubicacion.controller";
import { UbicacionService } from "./ubicacion.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UbicacionTipoEntity,
            UbicacionEntity,
            UbicacionRelacionEntity,
        ])
    ],
    controllers: [
        UbicacionController
    ],
    providers: [
        UbicacionService
    ]
})
export class UbicacionModule { }