import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransComponent } from './nova-trans/nova-trans.component';
import { ExtractComponent } from './extract/extract.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-route.module';
=======
import { AppRoutingModule } from './app-route.module';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> acc5263c0a505d3c5733a5681a9fcf8be6ca90f4

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaTransComponent,
    ExtractComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
