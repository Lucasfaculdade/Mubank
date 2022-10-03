import { NovaTransComponent } from './nova-trans/nova-trans.component';
import { ExtractComponent } from './extract/extract.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [
	{
	  path: 'extrato', component: ExtractComponent
	},
	{
	  path: 'nova transferencia', component: NovaTransComponent
	},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
