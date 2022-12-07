import { NovaTransComponent } from './nova-trans/nova-trans.component';
import { ExtractComponent } from './extract/extract.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './home/user-dashboard/user-dashboard.component';

export const routes: Routes = [
	{
		path: '', redirectTo: 'home', pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: ()=> import('./home/home-routing.module').then((m)=>m.HomeRoutingModule),
	},
	{
	    path: 'dashboard', component: UserDashboardComponent,
	    loadChildren: () => import('./home/user-dashboard/user-dashboard.module').then((m)=>m.UserDashboardModule),
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
