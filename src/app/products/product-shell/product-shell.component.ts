import { ProductService } from "./../product.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

@Component({
  templateUrl: "./product-shell.component.html",
})
export class ProductShellComponent implements OnInit, OnDestroy {
  pageTitle: string = "Products";

  monthCount: number;

  private _sub: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this._sub = this.productService.selectedProductChanges$.subscribe(
      (product) => {
        if (product) {
          const dateRelease = new Date(product.releaseDate);
          const now = new Date();
          this.monthCount =
            now.getMonth() -
            dateRelease.getMonth() +
            12 * (now.getFullYear() - dateRelease.getFullYear());
        } else {
          this.monthCount = 0;
        }
      }
    );
  }
  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
