import { Component } from '@angular/core';
import {Course} from "../../models/course";

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent {
  courses = COURSES;

}
const COURSES: Course[] = [
  {
    id: '1',
    courseCode: 'CSE 1101',
    courseTitle: 'Programming Language I',
    creditHourses: 3,
    obtainedMarks: 80,
    totalMarks: 100,
    grade: 'A+',
    semester: 'Fall 2015',
    gradePoint: 4.00,
    gradePoints: 12.00
  },
  {
    id: '2',
    courseCode: 'CSE 1102',
    courseTitle: 'Programming Language II',

    creditHourses: 3,
    obtainedMarks: 80,
    totalMarks: 100,
    grade: 'A+',
    semester: 'Fall 2015',
    gradePoint: 4.00,
    gradePoints: 12.00
  },
  {
    id: '3',
    courseCode: 'CSE 1103',
    courseTitle: 'Programming Language III',
    creditHourses: 3,
    obtainedMarks: 80,
    totalMarks: 100,
    grade: 'A+',
    semester: 'Fall 2015',
    gradePoint: 4.00,
    gradePoints: 12.00
  }
];
