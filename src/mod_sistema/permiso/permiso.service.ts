import { Injectable } from "@nestjs/common";

@Injectable()
export class PermisoService {

    public saludo() {
        return { message: "Permisos" };
    }
}