import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPreviewerComponent } from './color-previewer/color-previewer.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HeroesComponent } from './heroes/heroes.component';
import { Hero } from './heroes/hero.directive';
import { ToggleComponent } from './toggle/toggle.component';
import { ShowOne } from './show-one-container/show-one.directive';
import { ShowOneTrigger } from './show-one-container/show-one-trigger.directive';
import { ShowOneContainer } from './show-one-container/show-one-container.directive';
import { CollapseOnClick } from './collapsible/collapse-on-click.directive';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { ColorSampleComponent } from './color-sample/color-sample.component';
import { FormModelDrivenComponent } from './form-model-driven/form-model-driven.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormSignupComponent } from './form-signup/form-signup.component';
import { PipesComponent } from './pipes/pipes.component';
import { SortPipe } from './pipes/sort.pipe';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonsListComponent } from './lessons/lessons-list/lessons-list.component';
import { LessonsService } from './lessons/lessons.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from "@angular/common";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterComponent } from './router/router.component';
import { routeConfig } from './router-config';
import { SharedModule } from './shared.module';
import { RouterModule } from '@angular/router';
import {Home} from "./router/home.component";
import {DashboardModule} from "./dashboard/dashboard.module"
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ColorPreviewerComponent,
    SearchBoxComponent,
    HeroesComponent,
    Hero,
    ToggleComponent,
    ShowOneContainer,    
    ShowOneTrigger,
    ShowOne,
    CollapseOnClick,
    CollapsibleComponent,
    ColorSampleComponent,
    FormModelDrivenComponent,
    FormSignupComponent,
    PipesComponent,
    SortPipe,
    LessonsComponent,
    DashboardComponent,
    RouterComponent,
    Home
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CoursesModule,
    SharedModule,
    RouterModule.forRoot(routeConfig),
    DashboardModule
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
