import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ContasService } from "./contas.service";

@Injectable()
@ValidatorConstraint()
export class IsContaUnicaConstraint implements ValidatorConstraintInterface{
  
  constructor(private contasService: ContasService){}
  
  validate(numeroDaConta: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
    return !!!this.contasService.buscarNumeroDaConta(numeroDaConta);
  }
}

export function IsContaUnica(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsContaUnicaConstraint,
      });
    };
  }
