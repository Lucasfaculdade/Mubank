import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators{
    static passwordMatching(control: AbstractControl): ValidationErrors | null {
        const senhaDoCaixa = control.get('senhaDoCaixa')?.value;
        const senhaConfirm = control.get('confirmPassword')?.value;

        if((senhaDoCaixa === senhaConfirm) && (senhaDoCaixa !== null && senhaConfirm !== null)){
            return null;
        } else{
            return { passwordNotMatching: true }
        }
    }
}