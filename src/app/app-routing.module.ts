import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BracketsComponent } from './tournament/brackets/brackets.component';
import { RegistrationComponent } from './tournament/registration/registration.component';
import { HelloComponent } from './tournament/hello/hello.component';

const routes: Routes = [
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  {path: 'brackets', component: BracketsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'hello', component: HelloComponent},
  { path: '**', redirectTo: '/hello' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
