import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { accountId } from 'src/app/authenticate/account-Id';
import { AuthenticateService } from '../../authenticate/authenticate.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  
  constructor(
    private authService: AuthenticateService,
     private router: Router,
     private formBuilder: FormBuilder
     ) { }

  ngOnInit(): void {
    this.authService.authenticate()
  }
  criarForm(){
    this.loginForm = this.formBuilder.group({
      numeroDaConta: ['', [Validators.required]],
      senhaDoCaixa: ['', [Validators.required]]
    });
  }

  login(){
   if(this.loginForm.invalid) return;
   this.authService.authenticate().subscribe((account) =>{
     if(!account){
      alert('Falha na autenticação , Usuário ou senha invalido');
     }
   })
  }
}
