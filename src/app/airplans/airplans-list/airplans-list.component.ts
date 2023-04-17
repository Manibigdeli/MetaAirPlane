import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AirPlansModel } from '../airplans.model';
import { AirPlansService } from '../airplans.service';

@Component({
  selector: 'app-airplans-list',
  templateUrl: './airplans-list.component.html',
  styleUrls: ['./airplans-list.component.css']
})
export class AirplansListComponent implements OnInit {
  airplans:AirPlansModel[] | any
  form:FormGroup  = new FormGroup({
    'input' : new FormControl()
 });
   constructor(private airplansService:AirPlansService,){}

  ngOnInit(): void {
   
    this.airplansService.airplanechnage.subscribe(
      (airplans:AirPlansModel[])=>{
        this.airplans = airplans
      }
    )
    this.airplans = this.airplansService.get();
    
   this.form.valueChanges.subscribe(
      res=>{
        console.log(res)
      }
     )    
  };
}
