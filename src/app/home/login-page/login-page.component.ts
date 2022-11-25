import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../authenticate/authenticate.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  numeroDaConta!: number;
  password!: number;

  constructor(private authService: AuthenticateService) { }

  ngOnInit(): void {
  }
  
  login(){
    this.authService.authenticate(this.numeroDaConta, this.password).subscribe({
      next: () => {
        console.log('tá funcioanod');
      },
      error: (error) => {
        alert('usuário ou senha errado');
        console.log(error);
      }
    }, 
    );
  }
}
