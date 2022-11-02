import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedEnquiriesComponent } from './approved-enquiries.component';

describe('ApprovedEnquiriesComponent', () => {
  let component: ApprovedEnquiriesComponent;
  let fixture: ComponentFixture<ApprovedEnquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedEnquiriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
