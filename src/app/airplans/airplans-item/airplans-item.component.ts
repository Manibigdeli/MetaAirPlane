import { Component, Input } from '@angular/core';
import { AirPlansModel } from '../airplans.model';

@Component({
  selector: 'app-airplans-item',
  templateUrl: './airplans-item.component.html',
  styleUrls: ['./airplans-item.component.css']
})
export class AirplansItemComponent {
  @Input()  airplans:AirPlansModel

}
