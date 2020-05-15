import { ProductShellDetailComponent } from "./product-shell/product-shell-detail.component";
import { ProductShellComponent } from "./product-shell/product-shell.component";
import { ProductShellListComponent } from "./product-shell/product-shell-list.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ProductEditGuard } from "./edit/product-edit-guard.service";
import { ProductEditComponent } from "./edit/product-edit.component";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductListComponent } from "./product-list.component";
import { ProductService } from "./product.service";
import { ProductsStateService } from "./products-state.service";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "", component: ProductListComponent },
      { path: ":id", component: ProductDetailComponent },
      {
        path: ":id/edit",
        canDeactivate: [ProductEditGuard],
        component: ProductEditComponent,
      },
    ]),
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductShellComponent,
    ProductShellListComponent,
    ProductShellDetailComponent,
  ],
  providers: [ProductService, ProductEditGuard, ProductsStateService],
})
export class ProductModule {}
