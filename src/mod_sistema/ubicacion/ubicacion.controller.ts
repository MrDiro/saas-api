import { UbicacionService } from "./ubicacion.service";
import { Controller, Get } from "@nestjs/common";

@Controller({ version: "1" })
export class UbicacionController {
    constructor (private readonly ubicacionService: UbicacionService) {}

    @Get()
    public index() {
        return this.ubicacionService.saludar();
    }
}