import { Component } from '@angular/core';
import { SliderModel } from './slider.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  array:SliderModel[] = [
    new SliderModel('1'),
    new SliderModel('2'),
    new SliderModel('3')
    ]
}
