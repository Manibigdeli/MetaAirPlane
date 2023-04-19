import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProfileComponent } from './profile/profile.component';
import { VerificationComponent } from './profile/verification/verification.component';

const routes: Routes = [
{path:'' , redirectTo:'/home' , pathMatch:'full'},
{path:'home',component:HomepageComponent,children:[

]},



  {path:'auth' , component:AuthComponent},
  {path:'profile' , component:ProfileComponent,children:[
    {path:'verification' , component:VerificationComponent}
  ]},
  {path:'**' ,component:ErrorPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
