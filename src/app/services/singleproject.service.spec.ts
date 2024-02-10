import { TestBed } from '@angular/core/testing';

import { SingleprojectService } from './singleproject.service';

describe('SingleprojectService', () => {
  let service: SingleprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
