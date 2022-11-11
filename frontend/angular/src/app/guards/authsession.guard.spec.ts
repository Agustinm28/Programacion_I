import { TestBed } from '@angular/core/testing';

import { AuthsessionGuard } from './authsession.guard';

describe('AuthsessionGuard', () => {
  let guard: AuthsessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthsessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
