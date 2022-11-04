import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'https://identityserver.dev.axa.com.mx:443',
      clientId: 'jjsTUIOyMnYK0wzY7N6vSKI5DHsa'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
