import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewAccount } from './new-account';

@Injectable({
  providedIn: 'root'
})
export class NewAccountService {

  constructor(private http: HttpClient) { }

  resgisterNewAccount(newAccount: NewAccount){
    return this.http.post('http://localhost:3000/accounts', newAccount)
    
  }
}
