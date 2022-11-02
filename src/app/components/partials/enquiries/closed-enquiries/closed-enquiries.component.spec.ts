import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedEnquiriesComponent } from './closed-enquiries.component';

describe('ClosedEnquiriesComponent', () => {
  let component: ClosedEnquiriesComponent;
  let fixture: ComponentFixture<ClosedEnquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedEnquiriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
