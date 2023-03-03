import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Person} from "../models/person";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  private apiBaseUrl= 'http://localhost:8080/api/v1/people';

  constructor(private http: HttpClient) { }

  /*getTasks(): Observable<PersonalInfo[]>{
    return this.http.get<PersonalInfo[]>(this.apiUrl);
  }*/
  addPerson(info: Person): Observable<Person>{
    return this.http.post<Person>(this.apiBaseUrl,info, httpOptions);
  }

  getPerson(id: string): Observable<Person>{
    return this.http.get<Person>(this.apiBaseUrl+"/"+id);
  }
}
