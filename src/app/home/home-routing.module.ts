import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppModule } from "../app.module";
import { HomeComponent } from "./home.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { NewAccountComponent } from "./new-account/new-account.component";

const routes: Routes =[{
    path: '',
    component: HomeComponent,
    children:[
        {
            path: '',
            component: LoginPageComponent,
        },
        {
            path:'newaccount',
            component: NewAccountComponent,
        }
    ],
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRoutingModule{}