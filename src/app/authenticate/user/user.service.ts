import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { accountId } from './account-Id';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<accountId>({});

  constructor(private tokenService: TokenService) {
      if(this.tokenService.possuiToken()){
        this.decodificaJWT();
      }
  }

  private decodificaJWT(){
    const token = this.tokenService.retornoToken();
    const user = jwt_decode(token) as accountId;
    this.userSubject.next(user);
  }

  returnUser(){
    return this.userSubject.asObservable();
  }

  salvaToken(token: string){
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.excluirToken();
    this.userSubject.next({});
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }
}
