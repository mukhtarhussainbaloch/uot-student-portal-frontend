import {Component, Input} from '@angular/core';
import {Course} from "../../models/course";
@Component({
  selector: 'app-course-result',
  templateUrl: './course-result.component.html',
  styleUrls: ['./course-result.component.css']
})
export class CourseResultComponent {
  @Input()
  course: Course | undefined;
  @Input()
  displayedColumns = ['courseCode', 'courseTitle', 'creditHourses', 'obtainedMarks', 'totalMarks', 'grade', 'semester', 'gradePoint', 'gradePoints'];

}
