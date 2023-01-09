import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { accountId } from './user/account-Id';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  private readonly apiURL = 'http://localhost:3000/accounts';
 
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private userService: UserService
    ) { }

  authenticate(numeroDaConta: number, senhaDoCaixa: number): Observable<HttpResponse<any>> {
      return this.httpClient.post( 'http://localhost:3000/accounts', {
        numeroDaConta: numeroDaConta,
        senhaDoCaixa: senhaDoCaixa,
      },
      { observe: 'response' }
      ).pipe(
        tap((res) =>{
          const authToken = res.headers.get('x-acces-token') ?? '';
          this.userService.salvaToken(authToken);
        })
      );
  }
  }

