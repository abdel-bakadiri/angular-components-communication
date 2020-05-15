import { Injectable, OnDestroy } from "@angular/core";

@Injectable()
export class ProductsStateService implements OnDestroy {
  showImage: boolean; // Bag proprety
  listFilter: string; // Bag proprety
  constructor() {
  }
  ngOnDestroy(): void {
  }
}
