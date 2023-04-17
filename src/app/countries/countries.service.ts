import { Injectable } from "@angular/core";
import { CountriesModel } from "./countries.model";


@Injectable({providedIn:'root'})
export class CountriesService{
    countries:CountriesModel[] = [
        new CountriesModel('Turkey'),
        new CountriesModel('France')
    ];

    get(){
      return  this.countries.slice()
    }
    
}