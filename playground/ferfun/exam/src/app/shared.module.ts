

import {NgModule} from "@angular/core";
import {LessonsListComponent} from "./lessons/lessons-list/lessons-list.component";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [LessonsListComponent],
    exports: [LessonsListComponent],
    imports: [CommonModule]

})
export class SharedModule {

}