import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./home/menu.component";
import { PageNotFoundComponent } from "./home/page-not-found.component";
import { ShellComponent } from "./home/shell.component";
import { WelcomeComponent } from "./home/welcome.component";
import { ProductData } from "./products/product-data";
/* Feature Modules */
import { UserModule } from "./user/user.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    UserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
