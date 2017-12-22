
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {xhrHeaders} from "./xhr-headers";
import { Observable } from "rxjs/Observable";
import { Lesson } from "./lesson";


@Injectable()
export class LessonsService {

    lessons = [];
    
    constructor(private http: Http) {
        this.loadLessons();
    }

    loadLessons(search = ""): Observable<Lesson[]> {

        console.log(`searching for ${search}`);
        
        let params: URLSearchParams = new URLSearchParams();
        params.set('search', search);

        return this.http.get('/lessons', {search:params}).map(res => res.json());
    }
    

    loadDelayedLessons(search = "") {
        
                console.log(`searching for ${search}`);
        
                let params: URLSearchParams = new URLSearchParams();
                params.set('search', search);
        
                return this.http.get('/delayedlessons', {search:params}).map(res => res.json());        
            }
            
    createLesson(description) {
        
        console.log("creating lesson ...");
        const lesson = {description};
        this.lessons.push(lesson);

                const network$ = this.http.post('/lessons',
                    JSON.stringify({lesson}),
                    xhrHeaders());
        
                network$.subscribe(
                    () => console.log('HTTP post successful !'),
                    err => console.error(err),
                    () => console.log('monitoring completed ...')
        
                );
        
                return network$;   
    }            

    delete(lessonId) {
        console.log("deleting lesson ...");
        const index = this.lessons.findIndex(
            lesson => lesson.id === lessonId
        );
        this.lessons.splice(index, 1);
        this.http.delete(`/lessons/${lessonId}`, xhrHeaders())
            .subscribe(
                () => {},
                err => console.error(err)
            );
    }
    
}