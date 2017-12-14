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
    CollapsibleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }