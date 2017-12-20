import { Component, Input } from '@angular/core';

@Component({
  selector: 'color-sample',
  templateUrl: './color-sample.component.html',
  styleUrls: ['./color-sample.component.css']
})
export class ColorSampleComponent {

  @Input()
  color:string;

}
