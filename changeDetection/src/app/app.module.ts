import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { PushComponent } from './components/push/push.component';
import {MaterialModule} from './modules/material/material.module';
import {AddComponent} from './components/add/add.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    PushComponent,
    AddComponent,
    ChangeDetectionComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
