import { TestBed } from '@angular/core/testing';

import { AlixService } from './alix.service';

describe('AlixService', () => {
  let service: AlixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
