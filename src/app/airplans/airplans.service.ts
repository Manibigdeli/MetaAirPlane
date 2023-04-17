import { Injectable } from "@angular/core";
import { AirPlansModel } from "./airplans.model";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class AirPlansService{
   airplanechnage = new Subject<AirPlansModel[]>()
   private airplans : AirPlansModel[] = [
        new AirPlansModel('iran Air') , 
        new AirPlansModel('Turkish Air')
    ];

    get(){
      return  this.airplans.slice()
    }


    getindex(index:number){
      return this.airplans[index]
    }
}