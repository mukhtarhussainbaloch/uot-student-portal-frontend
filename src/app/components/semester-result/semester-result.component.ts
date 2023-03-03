import {Component, Input} from '@angular/core';
import {Course} from "../../models/course";

@Component({
  selector: 'app-semester-result',
  templateUrl: './semester-result.component.html',
  styleUrls: ['./semester-result.component.css']
})
export class SemesterResultComponent {
  // @Input()
  courses = COURSES;
  @Input()
  displayedColumns = ['id', 'courseCode', 'courseTitle', 'creditHourses', 'obtainedMarks', 'totalMarks', 'grade', 'gradePoint', 'gradePoints'];
  displayedColumnsFooter = [ 'sumTotal', 'creditHoursesSum', 'obtainedMarksSum', 'totalMarksSum', 'gradeAvg', 'gradePointSum', 'gradePointsSum'];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedFooterColumns = ['gradePoint', 'gradePoints'];
  displayedFooterColumns2 = ['id', 'courseCode', 'courseTitle'];
  dataSource = ELEMENT_DATA;
  @Input()
  semester: string="Fall 2015";
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
      gradePointsSum: 0
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
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}

interface SemesterCourseSummery {
  creditHoursesSum: number,
  obtainedMarksSum: number,
  totalMarksSum: number,
  gradePointSum: number,
  gradePointsSum: number
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

interface Transaction {
  item: string;
  cost: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
