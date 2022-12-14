import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MensagemModule } from "../components/mensagem/mensagem.module";
import { NewAccountComponent } from './new-account/new-account.component';



@NgModule({
    declarations: [
        HomeComponent,
        LoginPageComponent,
        UserDashboardComponent,
        NewAccountComponent,

        
    ],
    exports: [HomeComponent],
    providers:[
        FormBuilder
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        MensagemModule,
        ReactiveFormsModule
    ]
})
export class HomeModule { }
