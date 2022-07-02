import { TestBed } from '@angular/core/testing';

import { NgxWeekdayPickerService } from './ngx-weekday-picker.service';

describe('NgxWeekdayPickerService', () => {
  let service: NgxWeekdayPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWeekdayPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
