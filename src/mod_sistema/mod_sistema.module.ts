import { ModuloModule } from "./modulo/modulo.module";
import { AccesoModule } from "./acceso/acceso.module";
import { RouterModule } from "@nestjs/core";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        ModuloModule,
        AccesoModule,
        RouterModule.register([
            {
                path: "mod-sistema",
                children: [
                    { path: "modulo", module: ModuloModule },
                    { path: "acceso", module: AccesoModule }
                ]
            }
        ]),
    ]
})
export class ModSistemaModule { }