import { TestBed } from '@angular/core/testing';

import { AddFirestoreServiceService } from './add-firestore-service.service';

describe('AddFirestoreServiceService', () => {
  let service: AddFirestoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFirestoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
