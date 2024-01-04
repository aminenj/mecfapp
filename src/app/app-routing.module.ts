import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Salle1Component } from './salle1/salle1.component';
import { Salle2Component } from './salle2/salle2.component';

const routes: Routes = [
  {path : "*" , component :RegisterComponent},
  {path :"register" , component :RegisterComponent},
  {path :"login" , component :LoginComponent},
  {path :"" , component :LoginComponent},
  {path :"salle1" , component :Salle1Component},
  {path :"salle2" , component :Salle2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
