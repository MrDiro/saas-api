import { PermisoService } from "./permiso.service";
import { Controller, Get } from "@nestjs/common";

@Controller({ version: "1" })
export class PermisoController {
    constructor (private readonly permisoService: PermisoService) {}

    @Get()
    public index() {
        return this.permisoService.saludo();
    }
}