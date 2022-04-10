import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContextComponent } from './core/auth/auth-context/auth-context.component';
import { LoginComponent } from './core/auth/auth-context/inner-items/login/login.component';
import { SignUpComponent } from './core/auth/auth-context/inner-items/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthContextComponent,
    LoginComponent,
    SignUpComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
