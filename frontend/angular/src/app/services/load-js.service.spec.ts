import { TestBed } from '@angular/core/testing';

import { LoadJSService } from './load-js.service';

describe('LoadJSService', () => {
  let service: LoadJSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadJSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
