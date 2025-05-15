import { Injectable } from "@nestjs/common";

@Injectable()
export class UbicacionService {

    public saludar() {
        return { message: "Ubicacion" }
    }
}