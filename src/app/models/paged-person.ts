import { Person } from './person';

export class PagedPerson {
  get pageInfo(): Page {
    return this._pageInfo;
  }

  set pageInfo(value: Page) {
    this._pageInfo = value;
  }

  get person(): Person[] {
    return this._person;
  }

  set person(value: Person[]) {
    this._person = value;
  }

  private _person: Person[];
  private _pageInfo: Page;

  constructor(person: Person[], pageInfo: Page) {
    this._person = person;
    this._pageInfo = pageInfo;
  }
}

export interface Page {
  totalElements: number;
  totalPages: number;
  pageSize: number;
  numberOfElements: number;
  currentPage: number;
}
