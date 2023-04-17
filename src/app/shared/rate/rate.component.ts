import { Component } from '@angular/core';

@Component({
  selector: 'app-rate',
  template: ` <nz-rate [ngModel]="2.5" nzAllowHalf></nz-rate> `,
  styleUrls: ['./rate.component.css']
})
export class RateComponent {

}
