import { Component } from '@angular/core';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  message = 'Hello World !';
  
      date = new Date();
  
      pi = 3.14159265359;
  
      percentage = 0.0234;
  
      amount = 12.1234;
  
      data = ['A', 'B', 'H', 'C'];
}
