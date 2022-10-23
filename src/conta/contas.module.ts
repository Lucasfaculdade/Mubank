import { Module } from "@nestjs/common";
import { ContaController } from "./conta.controller";
import { ContasService } from "./contas.service";

@Module({
    controllers:[ContaController],
    providers:[ContasService]
})
export class ContaModule{}