import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingEnquiriesComponent } from './pending-enquiries.component';

describe('PendingEnquiriesComponent', () => {
  let component: PendingEnquiriesComponent;
  let fixture: ComponentFixture<PendingEnquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingEnquiriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
