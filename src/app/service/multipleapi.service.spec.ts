import { TestBed } from '@angular/core/testing';

import { MultipleapiService } from './multipleapi.service';

describe('MultipleapiService', () => {
  let service: MultipleapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
