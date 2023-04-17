import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route:ActivatedRoute ,private router:Router
    ,private authService:AuthService){}
  Onclick(){
   this.router.navigate(['auth'],{relativeTo:this.route})
  }


  Onlogout(){
  this.authService.logout()
  }
}
