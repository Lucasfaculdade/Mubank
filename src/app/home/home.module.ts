import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
