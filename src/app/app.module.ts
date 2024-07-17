import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './widgets/header/header.component';
import { SuiviRefComponent } from './components/suivi-ref/suivi-ref.component';
import { DefautsComponent } from './components/defauts/defauts.component';
import { LoginComponent } from './auth/login/login.component';
import { SuiviHorairesComponent } from './components/suivi-horaires/suivi-horaires.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SuiviRefComponent,
    DefautsComponent,
    LoginComponent,
    SuiviHorairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
