import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { CourseResult } from '../models/courseResult';
import { List } from 'postcss/lib/list';

@Injectable({
  providedIn: 'root',
})
export class SemesterResultService {
  constructor(private httpClient: HttpClient) {}
  // private apiBaseUrl = 'http://localhost:8080/api/v1/result';
  private apiBaseUrl = 'http://localhost:8080/api/v1/result/1104343';
  getStudentResultByStudentId(id: string): Observable<CourseResult[]> {
    // return this.httpClient.get<CourseResult[]>(this.apiBaseUrl + '/' + id);
    return this.httpClient.get<CourseResult[]>(this.apiBaseUrl);
  }
}
