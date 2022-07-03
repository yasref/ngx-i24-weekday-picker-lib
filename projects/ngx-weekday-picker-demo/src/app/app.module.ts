import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWeekdayPickerModule } from 'projects/ngx-weekday-picker/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxWeekdayPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
