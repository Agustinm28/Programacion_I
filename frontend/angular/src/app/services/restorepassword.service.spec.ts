import { TestBed } from '@angular/core/testing';

import { RestorepasswordService } from './restorepassword.service';

describe('RestorepasswordService', () => {
  let service: RestorepasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestorepasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
