import { TestBed } from '@angular/core/testing';

import { TheCoreLibService } from './the-core-lib.service';

describe('TheCoreLibService', () => {
  let service: TheCoreLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheCoreLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
