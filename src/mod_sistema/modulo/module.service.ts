import { Injectable } from "@nestjs/common";

@Injectable()
export class ModuloService {

    public saludar() {
        return { message: "Módulo de módulos" };
    }
}