import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { guardFormGuard } from './guard-form.guard';

describe('guardFormGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
