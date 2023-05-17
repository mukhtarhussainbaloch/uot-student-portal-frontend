import { Component, Input } from '@angular/core';
import { CourseResult } from '../../models/courseResult';
@Component({
  selector: 'app-course-result',
  templateUrl: './course-result.component.html',
  styleUrls: ['./course-result.component.css'],
})
export class CourseResultComponent {
  @Input()
  course: CourseResult | undefined;
  @Input()
  displayedColumns = [
    'courseCode',
    'courseTitle',
    'creditHourses',
    'obtainedMarks',
    'totalMarks',
    'grade',
    'semester',
    'gradePoint',
    'gradePoints',
  ];
}
