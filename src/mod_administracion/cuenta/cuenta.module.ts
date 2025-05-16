import { CuentaPlanRlModuloEntity } from "@db/mod_administracion/cuenta_rl_modulo.entity";
import { CuentaEstadoEntity } from "@db/mod_administracion/cuenta_estado.entity";
import { SuscripcionEntity } from "@db/mod_administracion/suscripcion.entity";
import { CuentaPlanEntity } from "@db/mod_administracion/cuenta_plan.entity";
import { PagoMetodoEntity } from "@db/mod_administracion/pago_metodo.entity";
import { PagoMonedaEntity } from "@db/mod_administracion/pago_moneda.entity";
import { CuentaEntity } from "@db/mod_administracion/cuenta.entity";
import { PagoEntity } from "@db/mod_administracion/pago.entity";
import { CuentaController } from "./cuenta.controller";
import { CuentaService } from "./cuenta.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CuentaEstadoEntity,
            CuentaPlanEntity,
            CuentaEntity,
            SuscripcionEntity,
            PagoMetodoEntity,
            PagoMonedaEntity,
            PagoEntity,
            CuentaPlanRlModuloEntity
        ])
    ],
    controllers: [
        CuentaController
    ],
    providers: [
        CuentaService
    ]
})
export class CuentaModule { }