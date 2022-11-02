import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleEnquiryComponent } from './schedule-enquiry.component';

describe('ScheduleEnquiryComponent', () => {
  let component: ScheduleEnquiryComponent;
  let fixture: ComponentFixture<ScheduleEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleEnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
