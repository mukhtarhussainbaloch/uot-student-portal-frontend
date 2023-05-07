import { Component, Input } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-semester-result',
  templateUrl: './semester-result.component.html',
  styleUrls: ['./semester-result.component.css'],
})
export class SemesterResultComponent {
  // @Input()
  courses = COURSES;
  @Input()
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
  semester: string = 'Fall 2015';
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
    for (let course of this.courses) {
      semesterCourseSummery.creditHoursesSum += course.creditHourses;
      semesterCourseSummery.obtainedMarksSum += course.obtainedMarks;
      semesterCourseSummery.totalMarksSum += course.totalMarks;
      semesterCourseSummery.gradePointSum += course.gradePoint;
      semesterCourseSummery.gradePointsSum += course.gradePoints;
    }
    return semesterCourseSummery;
  }

  calculateGPA() {
    let totalGradePoints = this.courses.reduce((accumulator, object) => {
      return accumulator + object.gradePoint;
    }, 0);
    let totalCreditHours = this.courses.reduce((accumulator, object) => {
      return accumulator + object.creditHourses;
    }, 0);
    for (let course of this.courses) {
      totalGradePoints += course.gradePoint;
      totalCreditHours += course.creditHourses;
    }
    return totalGradePoints / totalCreditHours;
  }

  displayedColumnsx: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    { item: 'Beach ball', cost: 4 },
    { item: 'Towel', cost: 5 },
    { item: 'Frisbee', cost: 2 },
    { item: 'Sunscreen', cost: 4 },
    { item: 'Cooler', cost: 25 },
    { item: 'Swim suit', cost: 15 },
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions
      .map((t) => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }
}

interface SemesterCourseSummery {
  creditHoursesSum: number;
  obtainedMarksSum: number;
  totalMarksSum: number;
  gradePointSum: number;
  gradePointsSum: number;
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
    gradePoint: 4.0,
    gradePoints: 12.0,
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
    gradePoint: 4.0,
    gradePoints: 12.0,
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
    gradePoint: 4.0,
    gradePoints: 12.0,
  },
];

interface Transaction {
  item: string;
  cost: number;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
