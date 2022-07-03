import { WeekDay } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-weekday-picker',
  templateUrl: 'ngx-weekday-picker.component.html',
  styleUrls: ['ngx-weekday-picker.component.scss']
})
export class NgxWeekdayPickerComponent implements OnInit {
  @Input() weekStart = WeekDay.Monday;
  @Input() daysNames = [
    'MO',
    'TU',
    'WE',
    'TH',
    'FR',
    'SA',
    'SU',
  ];
  @Input() disabledList: WeekDay[] = [];
  @Input() selected: WeekDay[] | WeekDay = [];

  @Input() dayWidth = '40px';

  @Input() fontSize = '14px';
  @Input() borderRadius = '6px';
  @Input() borderWidth = '1px';

  @Input() activeColor = '#fff';
  @Input() activeBgColor = '#2196f3';
  @Input() activeBorderColor = '#008eff';

  @Input() inactiveColor = '#000';
  @Input() inactiveBgColor = '#fff';
  @Input() inactiveBorderColor = '#ddd';

  @Input() isMulti = true;
  @Output() selectedChanged = new EventEmitter<any>();

  days = [
    { day: WeekDay.Monday, name: 'Monday', isSelected: false, isDisabled: false, },
    { day: WeekDay.Tuesday, name: 'Tuesday', isSelected: false, isDisabled: false, },
    { day: WeekDay.Wednesday, name: 'Wednesday', isSelected: false, isDisabled: false, },
    { day: WeekDay.Thursday, name: 'Thursday', isSelected: false, isDisabled: false, },
    { day: WeekDay.Friday, name: 'Friday', isSelected: false, isDisabled: false, },
    { day: WeekDay.Saturday, name: 'Saturday', isSelected: false, isDisabled: false, },
    { day: WeekDay.Sunday, name: 'Sunday', isSelected: false, isDisabled: false, },
  ];
  value: any = null;

  constructor() { }

  ngOnInit(): void {
    this.init();
  }
  init() {
    // init daysNames
    this.days.forEach((d, i) => {
      d.name = this.daysNames[i];
    });

    // init weekStart
    const index = this.days.map(x => x.day).indexOf(this.weekStart);
    for (let i = 0; i < index; i++) {
      this.days.push(this.days.shift() as any);
      this.daysNames.push(this.daysNames.shift() as any);
    }

    // init disabled
    this.days.filter(x => this.disabledList.includes(x.day)).forEach(x => x.isDisabled = true);

    // init selected
    if (Array.isArray(this.selected)) {
      this.days.filter(x => (this.selected as WeekDay[]).includes(x.day)).forEach(x => x.isSelected = true);
    } else {
      this.days.filter(x => this.selected === x.day).forEach(x => x.isSelected = true);
    }

  }
  dayClicked(d: any) {
    if (d.isDisabled) {
      return;
    }
    if (!d.isSelected && !this.isMulti) {
      this.days.forEach(x => x.isSelected = false);
    }
    d.isSelected = !d.isSelected;
    if (this.isMulti) {
      this.value = this.days.filter(x => x.isSelected).map(x => x.day);
    } else {
      const t = this.days.find(x => x.isSelected);
      this.value = t ? t.day : null;
    }
    console.log(this.value);
    this.selectedChanged.emit(this.value)
  }
}
