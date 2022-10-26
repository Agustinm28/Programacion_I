import { TestBed } from '@angular/core/testing';

import { PoemService } from './poem.service';

describe('PostService', () => {
  let service: PoemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
