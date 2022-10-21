import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../authenticate/authenticate.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  contaUser = '';
  password = '';

  constructor(private authService: AuthenticateService) { }

  ngOnInit(): void {
  }
  
  login(){
    this.authService.authenticate(this.contaUser, this.password).subscribe(()=>{
       console.log('ta funcionando');
    }, 
    (error) => {
      alert("Usuário ou senha invalida");
      console.log(error);
    },)
  }
}
