import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { BehaviorSubject, throwError } from "rxjs"
import { catchError, tap } from "rxjs/operators"
import { AuthModel } from "./auth.model"
import { UserModel } from "./user.model"
import { Router } from "@angular/router"

@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private http:HttpClient ,private router:Router){}
    user = new BehaviorSubject<UserModel>(null)
    signup(email:string , password:string){
      return this.http.post<AuthModel>
        ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCW8DwyakMIOzHxn636PJtJ-BCs1pdou10',
        {
            email : email ,
            password : password ,
            returnSecureToken : true
        }).pipe(catchError(this.errorhandler),tap(res=>{
            this.auth(res.email , res.idToken , +res.expiresIn , res.localId)
        }))
    }


    signin(email:string , password:string){
     return this.http.post<AuthModel>
      ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCW8DwyakMIOzHxn636PJtJ-BCs1pdou10',
        {
            email : email,
            password : password , 
            returnSecureToken: true
        }).pipe(catchError(this.errorhandler),tap(res=>{
            this.auth(res.email , res.idToken , +res.expiresIn , res.localId)
    }))
}





    private auth(email:string , idToken:string , expiresIn: number , id:string){
        const exprationdate = new Date(new Date().getTime() + +expiresIn * 1000 );
        const user = new UserModel(email, idToken , id , exprationdate);
        this.user.next(user);
        localStorage.setItem('information',JSON.stringify(user))
    };

    autolog(){
        const auto : {
            email:string , id:string , token:string , tokenexpration:string
          } = JSON.parse(localStorage.getItem('information'))

          if(!auto){
            return;
          }
          const newuser = new UserModel(auto.email,
            auto.id,auto.token,new Date(auto.tokenexpration));
            if(auto.token){
              this.user.next(newuser)
            }
    }
       

    logout(){
        this.user.next(null);
        this.router.navigate(['/auth']);
    }

              


    private errorhandler(error:HttpErrorResponse){
        let errormessage = 'unknown error 401';
        switch(error.error.message){
            case '400' : 
            errormessage = 'bad request 400'
            break;
            case '401' :
                errormessage = '401'
             
        }
        return throwError(errormessage)

    }
}
