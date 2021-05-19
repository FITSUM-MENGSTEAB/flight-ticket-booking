import { TestBed } from '@angular/core/testing';

import { FlightIntercepterInterceptor } from './flight-intercepter.interceptor';

describe('FlightIntercepterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FlightIntercepterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FlightIntercepterInterceptor = TestBed.inject(FlightIntercepterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
