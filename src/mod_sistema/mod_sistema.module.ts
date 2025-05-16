import { UbicacionModule } from "./ubicacion/ubicacion.module";
import { PermisoModulo } from "./permiso/permiso.module";
import { ModuloModule } from "./modulo/modulo.module";
import { AccesoModule } from "./acceso/acceso.module";
import { RouterModule } from "@nestjs/core";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        ModuloModule,
        AccesoModule,
        PermisoModulo,
        UbicacionModule,
        RouterModule.register([
            {
                path: "mod-sistema",
                children: [
                    { path: "modulo", module: ModuloModule },
                    { path: "acceso", module: AccesoModule },
                    { path: "permiso", module: PermisoModulo },
                    { path: "ubicacion", module: UbicacionModule }
                ]
            }
        ]),
    ]
})
export class ModSistemaModule { }