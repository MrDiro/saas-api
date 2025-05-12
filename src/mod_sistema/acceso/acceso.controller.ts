import { Controller, Get } from "@nestjs/common";
import { AccesoService } from "./acceso.service";

@Controller({ version: "1" })
export class AccesoController {
    constructor (private readonly accesoService: AccesoService) {}

    @Get()
    public index() {
        return this.accesoService.saludar();
    }
}