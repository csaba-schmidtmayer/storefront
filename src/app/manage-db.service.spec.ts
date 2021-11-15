import { TestBed } from '@angular/core/testing';

import { ManageDbService } from './manage-db.service';

describe('ManageDbService', () => {
  let service: ManageDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
