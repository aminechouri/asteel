import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SuiviRefComponent } from './components/suivi-ref/suivi-ref.component';
import { DefautsComponent } from './components/defauts/defauts.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [

  {
    path:'',
    component:HomepageComponent
  }
  ,
  {
    path:'suivi-ref',
    component:SuiviRefComponent
  },
  {
    path:'defauts',
    component:DefautsComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
