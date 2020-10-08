import { SharedModule } from "./../../shared/shared.module";
import { ProductsListComponent } from "./../../products-list/products-list.component";
import { ProductDetailsComponent } from "./../../product-details/product-details.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
  declarations: [ProductDetailsComponent, ProductsListComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
