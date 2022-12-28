import { FormGroup } from "@angular/forms";

export function passwordEqualValidator(formGroup: FormGroup){
    const senhaDoCaixa = formGroup.get('senhaDoCaixa')?.value ?? '';
    const confirmPassword = formGroup.get('senhaDoCaixa')?.value ?? '';


     if((senhaDoCaixa !== confirmPassword) && (senhaDoCaixa !== null && confirmPassword !== null)){
         return null;
     } else {
        return { passwordNotMatching: true };
     }
}