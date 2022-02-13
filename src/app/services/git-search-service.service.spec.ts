import { TestBed } from '@angular/core/testing';

import { GitSearchServiceService } from './git-search-service.service';

describe('GitSearchServiceService', () => {
  let service: GitSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
