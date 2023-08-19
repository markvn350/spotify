import { TestBed } from '@angular/core/testing';

import { InjectSessioInterceptor } from './inject-sessio.interceptor';

describe('InjectSessioInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InjectSessioInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InjectSessioInterceptor = TestBed.inject(InjectSessioInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
