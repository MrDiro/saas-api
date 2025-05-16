import { CuentaService } from "./cuenta.service";
import { Controller, Get } from "@nestjs/common";

@Controller({ version: "1" })
export class CuentaController {
    constructor (private readonly cuentaService: CuentaService) {}

    @Get()
    public index() {
        return this.cuentaService.saludar();
    }
}