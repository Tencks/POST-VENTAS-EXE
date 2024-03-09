import { TestBed } from '@angular/core/testing';

import { ApiDRFService } from './api-drf.service';

describe('ApiDRFService', () => {
  let service: ApiDRFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDRFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
