import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CountriesModel } from '../countries.model';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit{
  
  countries:CountriesModel[] | any
  form:FormGroup  = new FormGroup({
    'input' : new FormControl()
 });
   constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
   this.form.valueChanges.subscribe(
    res=>{
      console.log(res)
    }
   )
    this.countries = this.countriesService.get()
  }
}
