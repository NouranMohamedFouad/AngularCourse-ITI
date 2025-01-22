import { TestBed } from '@angular/core/testing';

import { CartItemsServiceService } from './cart-items-service.service';

describe('CartItemsServiceService', () => {
  let service: CartItemsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartItemsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
