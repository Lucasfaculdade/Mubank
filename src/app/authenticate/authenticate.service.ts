import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { accountId } from './account-Id';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  private readonly apiURL = 'http://localhost:3000/accounts';
 
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    ) { }

  authenticate(): Observable<accountId[]>{
      return this.httpClient.get<accountId[]>(this.apiURL);
   }
  }

