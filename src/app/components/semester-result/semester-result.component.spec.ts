import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterResultComponent } from './semester-result.component';

describe('SemesterResultComponent', () => {
  let component: SemesterResultComponent;
  let fixture: ComponentFixture<SemesterResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemesterResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemesterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
