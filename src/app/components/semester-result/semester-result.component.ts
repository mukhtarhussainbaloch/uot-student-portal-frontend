import { Component, Input } from '@angular/core';
import { CourseResult } from '../../models/courseResult';
import { SemesterResult } from '../../models/SemesterResult';

@Component({
  selector: 'app-semester-result',
  templateUrl: './semester-result.component.html',
  styleUrls: ['./semester-result.component.css'],
})
export class SemesterResultComponent {
  @Input()
  semesterResult: SemesterResult = new SemesterResult(1, []);

  // @Input()
  displayedColumns = [
    'id',
    'courseCode',
    'courseTitle',
    'creditHourses',
    'obtainedMarks',
    'totalMarks',
    'grade',
    'remarks',
    'status',
  ];
  displayedColumnsFooter = [
    'sumTotal',
    'creditHoursesSum',
    'obtainedMarksSum',
    'totalMarksSum',
    'gradeAvg',
    'gradePointSum',
    'gradePointsSum',
  ];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedFooterColumns = ['gradePoint', 'gradePoints'];
  displayedFooterColumns2 = ['id', 'courseCode', 'courseTitle'];
  @Input()
  semester: number = 1;
  semesterCourseSummery: SemesterCourseSummery;
  constructor() {
    this.semesterCourseSummery = this.calculateSemesterCourseSummery();
  }
  calculateSemesterCourseSummery() {
    let semesterCourseSummery: SemesterCourseSummery = {
      creditHoursesSum: 0,
      obtainedMarksSum: 0,
      totalMarksSum: 0,
      gradePointSum: 0,
      gradePointsSum: 0,
    };
    for (let course of this.semesterResult.subjectResults) {
      semesterCourseSummery.creditHoursesSum += course.creditHours;
      semesterCourseSummery.obtainedMarksSum += course.obtainedMarks;
      semesterCourseSummery.totalMarksSum += course.totalMarks;
      semesterCourseSummery.gradePointSum += course.gradePoint;
      semesterCourseSummery.gradePointsSum += course.gradePoints;
    }
    return semesterCourseSummery;
  }

  calculateGPA() {
    let totalGradePoints = this.semesterResult.subjectResults.reduce(
      (accumulator, object) => {
        return accumulator + object.gradePoint;
      },
      0
    );
    let totalCreditHours = this.semesterResult.subjectResults.reduce(
      (accumulator, object) => {
        return accumulator + object.creditHours;
      },
      0
    );
    for (let course of this.semesterResult.subjectResults) {
      totalGradePoints += course.gradePoint;
      totalCreditHours += course.creditHours;
    }
    return totalGradePoints / totalCreditHours;
  }
}

interface SemesterCourseSummery {
  creditHoursesSum: number;
  obtainedMarksSum: number;
  totalMarksSum: number;
  gradePointSum: number;
  gradePointsSum: number;
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
