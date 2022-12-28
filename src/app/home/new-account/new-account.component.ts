import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewAccount } from './new-account';
import { NewAccountService } from './new-account.service';



@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
 
  newAccountForm!: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder, 
    private newAccountService: NewAccountService,
    private router: Router) { }

  ngOnInit(): void {
    this.newAccountForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nomeDoCliente: ['',[Validators.required, Validators.minLength(4)]],
      senhaDoCaixa: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]], 
    },);
    
  }
 
  register(){
    if(!this.newAccountForm.valid) {
      const newAccount = this.newAccountForm.getRawValue() as NewAccount;
      this.newAccountService.resgisterNewAccount(newAccount).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: (error) => {
          console.log(error);
        }
        
       });
    }
  }

}
