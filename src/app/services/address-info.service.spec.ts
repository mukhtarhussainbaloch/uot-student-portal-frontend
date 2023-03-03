import { TestBed } from '@angular/core/testing';

import { AddressInfoService } from './address-info.service';

describe('AddressInfoService', () => {
  let service: AddressInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
