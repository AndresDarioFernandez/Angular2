import { Component, OnInit } from '@angular/core';
import { LessonsService } from './lessons.service';
import { initObservable } from '../init-observable';
import { Observable } from 'rxjs/Observable';
import { Lesson } from './lesson';

@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent  {

  lessons$: Observable<Lesson[]>;

  constructor(private lessonsService : LessonsService) {
    initObservable();

    this.lessons$ = lessonsService.loadLessons();
    
   }

   createLesson(description) {
    this.lessonsService.createLesson(description);
}

chain() {
  
          const lesson = "Lesson 1";
  
          const lesson2 = "Lesson2";
  
          const chain$ = this.lessonsService.createLesson(lesson)
              .switchMap(results => {
                  console.log('result', results);
                  return this.lessonsService.createLesson(lesson2)
              })
              .switchMap((results2) => {
                  console.log(results2);
                  return this.lessonsService.loadLessons();
              });  
  
          this.lessons$ = chain$;
  
          chain$.subscribe();    
      }
}
