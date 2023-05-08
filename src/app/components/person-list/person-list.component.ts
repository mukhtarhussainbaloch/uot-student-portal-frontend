import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Person } from '../../models/person';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  fromEvent,
  map,
  merge,
  Observable,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { PersonInfoService } from '../../services/person-info.service';
import { Page, PagedPerson } from '../../models/paged-person';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { catchError, finalize } from 'rxjs/operators';
import { PersonDataSource } from '../../shared/person-datasource';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild('searchInput') searchInput: ElementRef = new ElementRef('');
  private searchKeySubject = new BehaviorSubject<string>('a');
  searchKeyAction$ = this.searchKeySubject.asObservable();

  peopleDS$ = combineLatest([
    this.personInfoService.people$,
    this.searchKeyAction$,
  ]).pipe(
    map(([people, key]) => {
      const filteredpeople = people.person.filter(
        (p) => p.firstName.toLocaleLowerCase().length > 0
      );
      return new PagedPerson(filteredpeople, people.pageInfo);
    }),
    tap((p) => console.log(p)),
    catchError((err) => {
      this.errorMessage = err.status;
      return EMPTY;
    })
  );

  errorMessage: string = '';
  searchKey: string = '';
  dataSource: PersonDataSource;
  person: Person = {} as Person;
  selectedPerson: Person = {} as Person;
  pageInfo: Page = {} as Page;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'cnic',

    // 'title',
    // 'firstName',
    // 'lastName',
    'fullName',
    'fatherName',
    // 'dateOfBirth',
    'gender',
    'actions',
  ];
  data: any;
  advanceSearch: boolean = false;
  constructor(
    private router: Router,
    private personInfoService: PersonInfoService
  ) {
    this.dataSource = new PersonDataSource(this.personInfoService);
  }
  ngOnInit(): void {
    this.dataSource.loadPersonData('', 'asc', 0, 10);
    this.dataSource.pageInfo$.subscribe((value) => (this.pageInfo = value));
  }
  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(1500),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;

          this.loadPersonPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadPersonPage()))
      .subscribe();
  }
  loadPersonPage() {
    this.dataSource.loadPersonData(
      this.searchInput.nativeElement.value,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }

  onCreateNew() {
    this.router.navigate(['/employees/0/edit']);
  }
  onDelete(person: Person) {
    // this.personApiService.deletePerson(person).subscribe({
    //   next: data => console.log(data.json),
    //   error: err => console.log(err)
    // });
  }
  onEdit(person: Person) {}
  onSearchTermChanged(term: string) {
    //  this.searchKeySubject.next("");
    // console.log(term)
  }
  onSelect(id: number) {
    this.personInfoService.selectedPersonChanged(id);
    this.router.navigate(['/employees', id]);
  }

  onProfile(id: number) {
    this.router.navigate(['/employees', id]);
  }

  showAdvanceSearch() {
    this.advanceSearch = !this.advanceSearch;
  }
}
