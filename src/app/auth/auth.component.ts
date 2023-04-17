import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  LoginMode = true;
  error : string 
   form = new FormGroup({
    'email' : new FormControl(),
    'password' : new FormControl()
    });



    options: string[] = [];

    onInput(input: Event): void {
      const value = (input.target as HTMLInputElement).value;
      if (!value || value.indexOf('@') >= 0) {
        this.options = [];
      } else {
        this.options = ['gmail.com', 'yahoo.com', 'outlook.com']
        .map(res => `${value}@${res}`);
      }
    }
  
Switch(){
this.LoginMode = !this.LoginMode
  }

constructor(private authService:AuthService
  ,private router:Router){}
  Onsubmit(){
   
      if(!this.form.valid){
        return
      }
      const email = this.form.get('email')?.value;
      const password = this.form.get('password')?.value;
      let authObs$ = new Observable<any>()
      if(this.LoginMode){
       authObs$ = this.authService.signin(email , password)
      }else{
        authObs$ = this.authService.signup(email , password)
      }

      authObs$.subscribe(
        (res)=>{
          console.log(res);
          this.router.navigate(['/home'])
        } ,errormessage=>{
          this.error  = errormessage
          if(errormessage){
            setTimeout(() => {
              this.form.reset();
              this.error = null;
            }, 3000);
          }
        }
      )
      
  }


}
