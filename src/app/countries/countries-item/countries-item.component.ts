import { Component, Input } from '@angular/core';
import { CountriesModel } from '../countries.model';

@Component({
  selector: 'app-countries-item',
  templateUrl: './countries-item.component.html',
  styleUrls: ['./countries-item.component.css']
})
export class CountriesItemComponent {
  @Input() countries : CountriesModel 

}
