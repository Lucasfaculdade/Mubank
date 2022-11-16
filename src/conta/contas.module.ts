import { Module } from "@nestjs/common";
import { ContaController } from "./conta.controller";
import { ContasService } from "./contas.service";
import { IsContaUnicaConstraint } from "./is-conta-unica.validator";

@Module({
    controllers:[ContaController],
    providers:[
        ContasService,
        IsContaUnicaConstraint
    ]
})
export class ContaModule{}