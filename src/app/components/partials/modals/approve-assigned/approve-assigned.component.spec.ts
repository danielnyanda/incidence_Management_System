import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveAssignedComponent } from './approve-assigned.component';

describe('ApproveAssignedComponent', () => {
  let component: ApproveAssignedComponent;
  let fixture: ComponentFixture<ApproveAssignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveAssignedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
