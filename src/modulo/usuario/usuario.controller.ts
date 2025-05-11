import { UsuarioService } from "@api/modulo/usuario/usuario.service";
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CreateUsuarioDto } from "./usuario.validator";

@Controller({ version: "1" })
export class UsuarioController {
    constructor(private readonly usuarioSerivice: UsuarioService) {}

    @Get("estados")
    public estados() {
        return this.usuarioSerivice.estados();
    }

    @Get("tipos")
    public tipos() {
        return this.usuarioSerivice.tipos();
    }

    @Post()
    public guardar(@Body() data: CreateUsuarioDto) {
        console.log(data);

        return { status: 200 };
    }
}