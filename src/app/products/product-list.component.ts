import { ProductsStateService } from "./products-state.service";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { CriteraFilterComponent } from "./../shared/critera-filter.component";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit, AfterViewInit {
  @ViewChild("creteriacomponent") creteriaFilter: CriteraFilterComponent;
  // @ViewChild("refListFelter") inputFilterElementRef: ElementRef;
  // *method 3: communication html<=>> ts using @ViewChild
  // @ViewChild(NgModel) inputngModel: NgModel;

  pageTitle: string = "Product List";

  // private _listFilter: string;
  // public get listFilter(): string {
  //   return this._listFilter;
  // }
  // public set listFilter(value: string) {
  //   this._listFilter = value;
  // }

  includeDetails = true;

  // * methode 2: using getter and setter to communicate ( html <=>> ts)
  // private _listFilter: string;
  // public get listFilter(): string {
  //   return this._listFilter;
  // }
  // public set listFilter(value: string) {
  //   this._listFilter = value;
  //   this.performFilter(value);
  // }
  public get showImage(): boolean {
    return this.productsStateService.showImage;
  }
  public set showImage(value: boolean) {
    this.productsStateService.showImage = value;
  }

  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;

  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(
    private productService: ProductService,
    private productsStateService: ProductsStateService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        this.products = products;
        this.performFilter(this.productsStateService.listFilter);
      },
      (error: any) => (this.errorMessage = <any>error)
    );
  }
  ngAfterViewInit(): void {
    // this.listFilter = this.creteriaFilter.listFilter;
    // this.inputngModel.valueChanges.subscribe(() =>
    //   this.performFilter(this.listFilter)
    // );
    // this.inputFilterElementRef.nativeElement.focus();
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy?: string): void {
    if (filterBy) {
      this.filteredProducts = this.products.filter(
        (product: IProduct) =>
          product.productName
            .toLocaleLowerCase()
            .indexOf(filterBy.toLocaleLowerCase()) !== -1
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
  onValueChanges(value: string): void {
    this.productsStateService.listFilter = value;
    this.performFilter(this.productsStateService.listFilter);
    console.log("STOP", this.productsStateService.listFilter);
  }
  // *Methode 1: two ways bunding the long way
  // onfilterProducts(filterValue: string): void {
  //     this.listFilter = filterValue;
  //     this.performFilter(this.listFilter);
  //   }
}
