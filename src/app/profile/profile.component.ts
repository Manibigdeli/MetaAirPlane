import { Component } from '@angular/core';
import { ProfileModel } from './profile.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
profile:ProfileModel[] = [
  new ProfileModel('Mani','1', '2000' , '09125411618')
];
constructor(private router:Router , private state:ActivatedRoute){}
verification(){
this.router.navigate(['verification'],{relativeTo:this.state})
}
}
