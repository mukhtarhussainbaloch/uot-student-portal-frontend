import { CourseResult } from './courseResult';

export class SemesterResult {
  semester: number;
  subjectResults: CourseResult[];
  constructor(semester: number, courseResults: CourseResult[]) {
    this.semester = semester;
    this.subjectResults = courseResults;
  }
}
