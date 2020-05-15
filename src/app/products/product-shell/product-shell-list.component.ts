import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "../product.service";
import { IProduct } from "./../product";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "pm-product-shell-list",
  templateUrl: "./product-shell-list.component.html",
})
export class ProductShellListComponent implements OnInit, OnDestroy {
  pageTitle: string = "Products";
  errorMessage: string;
  products: IProduct[];
  selectedProduct: IProduct;
  private _sub: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this._sub = this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        this.products = products;
      },
      (error: any) => (this.errorMessage = <any>error)
    );
    this.productService.selectedProductChanges$.subscribe(
      (product) => (this.selectedProduct = product)
    );
  }
  onClick(product: IProduct): void {
    this.productService.changeSelectedProduct(product);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
