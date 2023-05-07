import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Person } from '../models/person';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PersonInfoService } from '../services/person-info.service';
import { catchError, finalize } from 'rxjs/operators';
import { Page, PagedPerson } from '../models/paged-person';

export class PersonDataSource implements DataSource<Person> {
  private personSubject = new BehaviorSubject<Person[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  // @ts-ignore
  private personPageInfo = new BehaviorSubject<Page>(undefined);
  // @ts-ignore
  private singlePersonSubject = new BehaviorSubject<Person>(undefined);

  public loading$ = this.loadingSubject.asObservable();
  public pageInfo$ = this.personPageInfo.asObservable();

  constructor(private apiService: PersonInfoService) {}

  connect(
    collectionViewer: CollectionViewer
  ): Observable<Person[] | ReadonlyArray<Person>> {
    return this.personSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.personSubject.complete();
    this.loadingSubject.complete();
    this.singlePersonSubject.complete();
  }

  loadPersonData(
    filter: string,
    sortDirection: string,
    pageIndex: number,
    pageSize: number
  ) {
    this.loadingSubject.next(true);
    this.apiService
      .getAllPerson(filter, sortDirection, pageIndex, pageSize)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((personList) => {
        this.personSubject.next((personList as PagedPerson).person);
        this.personPageInfo.next((personList as PagedPerson).pageInfo);
      });
  }

  loadPersonDataById(personId: string) {
    this.loadingSubject.next(true);
    this.apiService
      .getPersonById(personId)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((personData) =>
        this.singlePersonSubject.next(<Person>personData)
      );
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: number, b: number, isAsc: any) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
