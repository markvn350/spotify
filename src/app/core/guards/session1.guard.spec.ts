import { TestBed } from '@angular/core/testing';

import { Session1Guard } from './session1.guard';

describe('Session1Guard', () => {
  let guard: Session1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Session1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
