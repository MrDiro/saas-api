import { CuentaModule } from "./cuenta/cuenta.module";
import { RouterModule } from "@nestjs/core";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        CuentaModule,
        RouterModule.register([
            {
                path: "mod-administracion",
                children: [
                    { path: "cuenta", module: CuentaModule }
                ]
            }
        ])
    ]
})
export class ModAdministracionModule { }