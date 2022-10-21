import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient: HttpClient) { }

  authenticate(contaUser: string, password: string): Observable<any>{
     return this.httpClient.post('http://localhost:3000/contaUser/login',{
      contaUser: contaUser,
      password: password,
     })
     }
  }

