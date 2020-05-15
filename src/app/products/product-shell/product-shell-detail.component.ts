import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "../product.service";
import { IProduct } from "./../product";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "pm-product-shell-detail",
  templateUrl: "./product-shell-detail.component.html",
})
export class ProductShellDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = "Product Detail";

  product: IProduct | null;

  private _sub: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this._sub = this.productService.selectedProductChanges$.subscribe(
      (product) => (this.product = product)
    );
  }
  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
