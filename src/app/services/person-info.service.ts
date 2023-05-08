import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  tap,
  throwError,
} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/person';
import { PagedPerson } from '../models/paged-person';
import { SortDirection } from '@angular/material/sort';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PersonInfoService {
  private apiBaseUrl = 'http://localhost:8080/api/v1/people';

  constructor(private httpClient: HttpClient) {}

  people$ = this.httpClient.get<PagedPerson>(this.apiBaseUrl).pipe(
    map((res: any) => {
      return new PagedPerson(res['_embedded'].personList, {
        totalElements: res.page.totalElements,
        totalPages: res.page.totalPages,
        numberOfElements: res.page.numberOfElements,
        pageSize: res.page.size,
        currentPage: res.page.number,
      });
    }),
    catchError((err) => this.handleError(err))
  );

  selectedPersonSubject$ = new BehaviorSubject<number>(1);
  selectedPersonAction$ = this.selectedPersonSubject$.asObservable();
  selectedPerson$ = combineLatest([
    this.people$,
    this.selectedPersonAction$,
  ]).pipe(
    map(([people, selectedPersonId]) => {
      // @ts-ignore
      return people.person.find((p: Person) => p.id === selectedPersonId);
    }),
    tap((p) => console.log(p))
  );

  /*getTasks(): Observable<PersonalInfo[]>{
    return this.http.get<PersonalInfo[]>(this.apiUrl);
  }*/
  addPerson(info: Person): Observable<Person> {
    return this.httpClient.post<Person>(this.apiBaseUrl, info, httpOptions);
  }

  getPersonById(id: string): Observable<Person> {
    return this.httpClient.get<Person>(this.apiBaseUrl + '/' + id);
  }
  getPeople(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.apiBaseUrl);
  }

  getAllPerson(
    filter: string,
    // sort: string,
    sortDirection: string,
    pageIndex: number,
    pageSize: number
  ): Observable<PagedPerson> {
    const requestUrl = `${
      this.apiBaseUrl + '/search'
    }?filter=${filter}&sortOrder=${sortDirection}&page=${pageIndex}&size=${pageSize}`;
    console.log(requestUrl);
    return this.httpClient.get<PagedPerson>(requestUrl).pipe(
      // map((res: any) => {
      //   console.log(res);
      //   return new PagedPerson(res['_embedded'].personList, {
      //     totalElements: res.page.totalElements,
      //     totalPages: res.page.totalPages,
      //     numberOfElements: res.page.numberOfElements,
      //     pageSize: res.page.size,
      //     currentPage: res.page.number,
      //   });
      // })
      map((res: any) => {
        console.log(res.page);
        return new PagedPerson(res['_embedded'].personList, res.page);
      }),
      catchError((err) => this.handleError(err))
    );
  }
  selectedPersonChanged(personId: number) {
    console.log(personId);
    this.selectedPersonSubject$.next(personId);
  }
  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    // if (err.error instanceof ErrorEvent) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   errorMessage = `An error occurred: ${err.error.message}`;
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong,
    //   errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    // }
    console.error(err);
    return throwError(err);
  }
}
