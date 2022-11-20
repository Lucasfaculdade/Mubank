import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient: HttpClient) { }

  authenticate(contaNumber: number, password: number): Observable<any>{
     return this.httpClient.post('http://localhost:3000/contaNumber/login',{
      contaNumber: contaNumber,
      password: password,
     })
     }
  }

