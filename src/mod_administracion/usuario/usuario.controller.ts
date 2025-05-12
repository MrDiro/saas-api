import { UsuarioService } from "@api/mod_administracion/usuario/usuario.service";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUsuarioDto } from "./usuario.validator";

@Controller({ version: "1" })
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    public usuario() {
        return this.usuarioService.usuario()
    }

    @Get("estados")
    public estados() {
        return this.usuarioService.estados();
    }

    @Get("tipos")
    public tipos() {
        return this.usuarioService.tipos();
    }

    @Post()
    public guardar(@Body() data: CreateUsuarioDto) {
        return this.usuarioService.guardar(data);
    }
}