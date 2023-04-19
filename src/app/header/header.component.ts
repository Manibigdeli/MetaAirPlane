import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy{
  constructor(private route:ActivatedRoute ,private router:Router
    ,private authService:AuthService){}
     authmode = true;
     user:Subscription

  Onclick(){
   this.router.navigate(['auth'],{relativeTo:this.route})
  }
  
  ngOnInit(): void {
   this.user = this.authService.user.subscribe(
      user=>{
        this.authmode = !!user
      }
    )
  }

  Onlogout(){
  this.authService.logout()
  }

  ngOnDestroy(): void {
  }
}
