import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSemesterFeeComponent } from './student-semester-fee.component';

describe('StudentSemesterFeeComponent', () => {
  let component: StudentSemesterFeeComponent;
  let fixture: ComponentFixture<StudentSemesterFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSemesterFeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSemesterFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
