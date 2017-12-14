import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BLUE, RED} from "./constants";

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})

export class ColorPickerComponent {
  
      @Input()
      color:string;
  
      @Output("color")
      colorOutput = new EventEmitter();
  
      choose(color) {
          this.colorOutput.emit(color);
      }
  
      reset() {
          this.colorOutput.emit('black');
      }
  
  }