import { Component } from '@angular/core';
import { CourseResult } from '../../models/courseResult';
import { SemesterResultService } from '../../services/semester-result.service';
import { SemesterResult } from '../../models/SemesterResult';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css'],
})
export class StudentResultComponent {
  semesterResult: SemesterResult[] = [];
  semesterWiseResults: CourseResult[][] = [];
  constructor(private semesterResultService: SemesterResultService) {
    this.semesterResultService
      .getStudentResultByStudentId('1104343')
      .subscribe((result) => {
        // this.semesterResult.subjectResults = result;
        result.forEach((course) => {
          console.log(Number(course.semesterNo).valueOf());
          if (!this.semesterWiseResults[Number(course.semesterNo).valueOf()]) {
            this.semesterWiseResults[Number(course.semesterNo.valueOf())] = [];
          }
          this.semesterWiseResults[Number(course.semesterNo).valueOf()].push(
            course
          );
        });

        console.log(this.semesterWiseResults);
        this.semesterWiseResults.forEach((semesterResult, index) => {
          this.semesterResult.push(new SemesterResult(index, semesterResult));
        });
        // this.semesterResult.semesterNo = 1;
        console.log(this.semesterResult);
      });
  }

  courses = COURSES;
}

const COURSES: CourseResult[] = [
  {
    id: '1',
    courseCode: 'CSE 1101',
    courseTitle: 'Programming Language I',
    creditHours: 3,
    obtainedMarks: 80,
    totalMarks: 100,
    grade: 'A+',
    semesterNo: '1',
    gradePoint: 4.0,
    gradePoints: 12.0,
  },
  {
    id: '2',
    courseCode: 'CSE 1102',
    courseTitle: 'Programming Language II',

    creditHours: 3,
    obtainedMarks: 80,
    totalMarks: 100,
    grade: 'A+',
    semesterNo: '1',
    gradePoint: 4.0,
    gradePoints: 12.0,
  },
  {
    id: '3',
    courseCode: 'CSE 1103',
    courseTitle: 'Programming Language III',
    creditHours: 3,
    obtainedMarks: 80,
    totalMarks: 100,
    grade: 'A+',
    semesterNo: '1',
    gradePoint: 4.0,
    gradePoints: 12.0,
  },
];
