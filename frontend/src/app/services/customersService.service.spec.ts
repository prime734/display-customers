/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomersServiceService } from './customers.service';

describe('Service: CustomersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomersServiceService]
    });
  });

  it('should ...', inject([CustomersServiceService], (service: CustomersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
