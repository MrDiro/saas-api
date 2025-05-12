import { Controller, Get } from "@nestjs/common";
import { ModuloService } from "./module.service";

@Controller({ version: "1" })
export class ModuloController {
    constructor (private readonly moduloService: ModuloService) {}
    
    @Get()
    public index() {
        return this.moduloService.saludar();
    }
}