import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private NewAccountService: NewAccountService) { }

  ngOnInit(): void {
    this.newAccountForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      nomeDoCliente:['',[Validators.required, Validators.minLength(4)]],
      senhaDoCaixa:[''], 
    });
  }
 
  register(){
    const newAccount = this.newAccountForm.getRawValue() as NewAccount;
    console.log(newAccount);
  }
}
