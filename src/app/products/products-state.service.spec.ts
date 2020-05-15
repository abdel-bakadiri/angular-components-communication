import { TestBed, inject } from '@angular/core/testing';

import { ProductsStateService } from './products-state.service';

describe('ProductsStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsStateService]
    });
  });

  it('should be created', inject([ProductsStateService], (service: ProductsStateService) => {
    expect(service).toBeTruthy();
  }));
});
