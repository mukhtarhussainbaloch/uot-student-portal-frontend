import { TestBed } from '@angular/core/testing';

import { SemesterResultService } from './semester-result.service';

describe('SemesterResultService', () => {
  let service: SemesterResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemesterResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
