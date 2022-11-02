import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledEnquiriesComponent } from './cancelled-enquiries.component';

describe('CancelledEnquiriesComponent', () => {
  let component: CancelledEnquiriesComponent;
  let fixture: ComponentFixture<CancelledEnquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelledEnquiriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelledEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
