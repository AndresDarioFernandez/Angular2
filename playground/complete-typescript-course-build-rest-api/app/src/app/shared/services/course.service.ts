import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Course} from "ctc-shared/model/course";



@Injectable()
export class CourseService {


  constructor(private http: Http) {

  }


    findCourseById(id:number): Observable<Course> {
        return this.http.get(`/api/courses/${id}`).map(res => res.json());
    }


}
