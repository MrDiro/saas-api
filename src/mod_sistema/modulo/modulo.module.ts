import { ModuloEntity } from "@db/mod_sistema/modulo.entity";
import { ModuloController } from "./modulo.controller";
import { ModuloService } from "./module.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ModuloEntity
        ])
    ],
    controllers: [ 
        ModuloController 
    ],
    providers: [
        ModuloService
    ]
})
export class ModuloModule {}