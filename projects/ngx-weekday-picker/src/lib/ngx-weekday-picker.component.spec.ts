import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWeekdayPickerComponent } from './ngx-weekday-picker.component';

describe('NgxWeekdayPickerComponent', () => {
  let component: NgxWeekdayPickerComponent;
  let fixture: ComponentFixture<NgxWeekdayPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxWeekdayPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxWeekdayPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
