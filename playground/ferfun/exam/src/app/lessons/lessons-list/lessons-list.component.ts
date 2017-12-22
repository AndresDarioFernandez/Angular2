import { Component, Input } from '@angular/core';
import { LessonsService } from '../lessons.service';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})

export class LessonsListComponent  {
  
  @Input()
  lessons = [];
  
  constructor(private lessonsService : LessonsService) { }

  }
