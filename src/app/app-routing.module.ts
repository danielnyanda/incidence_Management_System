import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/pages/login/login.component';
import { NavigatorComponent } from './components/pages/navigator/navigator.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'navigator',component:NavigatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
