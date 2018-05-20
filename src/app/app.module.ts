import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UpploadModule } from 'uppload-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
