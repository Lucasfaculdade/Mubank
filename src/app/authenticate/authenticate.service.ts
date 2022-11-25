import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient: HttpClient) { }

  authenticate(numeroDaConta: number, password: number): Observable<any>{
     return this.httpClient.post('http://localhost:3000/transferencia',{
      numeroDaConta: numeroDaConta,
      password: password,
     })
     }
  }

