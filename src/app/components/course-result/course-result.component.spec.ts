import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseResultComponent } from './course-result.component';

describe('SubjectResultComponent', () => {
  let component: CourseResultComponent;
  let fixture: ComponentFixture<CourseResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
