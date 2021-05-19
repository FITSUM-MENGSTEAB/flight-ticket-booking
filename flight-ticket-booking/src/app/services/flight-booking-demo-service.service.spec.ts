import { TestBed } from '@angular/core/testing';

import { FlightBookingDemoServiceService } from './flight-booking-demo-service.service';

describe('FlightBookingDemoServiceService', () => {
  let service: FlightBookingDemoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightBookingDemoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
