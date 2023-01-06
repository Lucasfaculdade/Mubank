import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ContasService } from "./contas.service";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsContaUnicaConstraint implements ValidatorConstraintInterface{
  
  constructor(private contasService: ContasService){}
  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const contaExistente = await this.contasService.contaExistente(value)
    return !contaExistente;
  }

}

export const contaUnica = (validationOptions: ValidationOptions ) => {
  return (objeto: Object, propriedade: string) =>{
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: validationOptions,
      constraints: [],
      validator: IsContaUnicaConstraint 
    })
  }
}
