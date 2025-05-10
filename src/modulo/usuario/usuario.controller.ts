import { UsuarioService } from "@api/modulo/usuario/usuario.service";
import { Controller, Get } from "@nestjs/common";

@Controller({ version: "1" })
export class UsuarioController {
    constructor(private readonly usuarioSerivice: UsuarioService) {}

    @Get()
    public async index() {
        return this.usuarioSerivice.saludo();
    }
}