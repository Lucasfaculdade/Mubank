import { NovaTransComponent } from './nova-trans/nova-trans.component';
import { ExtractComponent } from './extract/extract.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
	{
		path: '', redirectTo: 'login', pathMatch: 'full'
	},
	{
		path: 'login', component: LoginComponent
	},
	{
	  path: 'extrato', component: ExtractComponent
	},
	{
	  path: 'transferencia', component: NovaTransComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
