import { Injectable } from "@nestjs/common";

@Injectable()
export class CuentaService {

    public async saludar() {
        return { message: "Cuenta" }
    }
}