import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AuTabPanelModule} from "./au-tab-panel/au-tab-panel.module";
import { AuInputModule } from 'app/au-input.module';
import { AuModalModule } from 'app/au-modal/au-modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuMaskModule } from 'app/au-mask/au-mask.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AuTabPanelModule,
        AuInputModule,
        AuModalModule.forRoot(),
        BrowserAnimationsModule,
        AuMaskModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule {
}
