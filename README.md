# NgxI24WeekdayPickerLib

 A lightweight plugin to a pick weekday.
 
## Features
* highly customizable
* very easy to implement
## Demo
[![](https://raw.githubusercontent.com/yasref/ngx-i24-weekday-picker-lib/master/demo/imgs/ngx-weekday-picker.png)](https://stackblitz.com/edit/ngx-weekday-picker-demo)
* [Link](https://stackblitz.com/edit/ngx-weekday-picker-demo)
## Get started
#### Installation
```
$ npm i ngx-weekday-picker
```
#### Example
##### TS
###### Module
```typescript 
import { NgxWeekdayPickerModule } from 'ngx-weekday-picker';
@NgModule({
  declarations: [ AppComponent ],
  imports: [BrowserModule, NgxWeekdayPickerModule  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
 ###### Component
 ```typescript 
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 options = {
    weekStart: WeekDay.Saturday,
    inactiveColor: '#f2f2f2',
    inactiveBgColor: '#2a2a2a',
    inactiveBorderColor: '#000',
    daysNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    selected: [WeekDay.Saturday, WeekDay.Sunday],
  };
  options1 = { 
    weekStart: WeekDay.Saturday,
    activeBgColor:'#e91e63',
    activeBorderColor:'#e91e63',
    inactiveColor: '#f2f2f2',
    inactiveBgColor: '#2a2a2a',
    inactiveBorderColor: '#000',
    daysNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    selected: [WeekDay.Saturday, WeekDay.Sunday],
  };
}
```
##### HTML
```html 
 <ngx-weekday-picker></ngx-weekday-picker>
  <ngx-weekday-picker
    [daysNames]="options.daysNames"
    [weekStart]="options.weekStart"
    [selected]="options.selected"
    [inactiveColor]="options.inactiveColor"
    [inactiveBgColor]="options.inactiveBgColor"
    [inactiveBorderColor]="options.inactiveBorderColor"
  ></ngx-weekday-picker>
  <ngx-weekday-picker
    [daysNames]="options1.daysNames"
    [activeBgColor]="options1.activeBgColor"
    [activeBorderColor]="options1.activeBorderColor"
    [weekStart]="options1.weekStart"
    [selected]="options1.selected"
    [inactiveColor]="options1.inactiveColor"
    [inactiveBgColor]="options1.inactiveBgColor"
    [inactiveBorderColor]="options1.inactiveBorderColor"
  ></ngx-weekday-picker>
``` 

## Options

| Property (Type) | Default | Description|
| - | - | - |
| weekStart |  WeekDay.Monday | Select the first day in the list |
| daysNames | ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'] | The labels of the days |
| disabledList | [] | The disabled days list |
| selected | [] | The default selected days |
| dayWidth | 40px | The width of the days |
| fontSize | 14px | The font size of the days |
| borderRadius | 6px | The border radius |
| borderWidth | 1px | The border width |
| activeColor | #fff | The color of the selected days |
| activeBgColor | #2196f3 | The background color of the selected days |
| activeBorderColor | #008eff | The border color of the selected days |
| inactiveColor | #000 | The color of the not selected days |
| inactiveBgColor | #fff |The background color of the not selected days |
| inactiveBorderColor | #ddd | The border color of the not selected days |

## Events
* `selectedChanged` - triggered on change the selection

## Other Projects
| Name | Link | Description|
| - | - | - |
| ngx-i24-circular-progress | [Link](https://www.npmjs.com/package/ngx-i24-circular-progress) | Lightweight plugin to render simple, animated and retina optimized pie charts |
| ngx-i24-color-picker      | [Link](https://www.npmjs.com/package/ngx-i24-color-picker)      | A lightweight plugin to pick a color.                                         |
## Copyright
Copyright (c) 2022 Yaseen Alrefaee, contributors. Released under the MIT


<!-- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
