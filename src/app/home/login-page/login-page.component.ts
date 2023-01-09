import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { accountId } from 'src/app/authenticate/user/account-Id';
import { AuthenticateService } from '../../authenticate/authenticate.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  formGroup: any;
  
  constructor(
    private authService: AuthenticateService,
     private router: Router,
     private formBuilder: FormBuilder
     ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      numeroDaConta: ['', Validators.required],
      senhaDoCaixa: ['', Validators.required]
    })
  }

  onSubmit(){
   if(this.loginForm.valid){
     this.authService.authenticate(this.formGroup.numeroDaConta, this.formGroup.senhaDoCaixa).subscribe(() =>{
       console.log('authenticando');
     })
   } else {
     this.validateAllFormFileds(this.loginForm);
     alert("Um campo está faltando ou está invalido")
   }
  }

  private validateAllFormFileds(formGroup: FormGroup){
     Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormGroup){
        control.markAsDirty({onlySelf: true});
      } else if(control instanceof FormGroup){
        this.validateAllFormFileds(control)
      }
     })
  }
}
