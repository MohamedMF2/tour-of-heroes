import { ProductResolver } from "./../../core/guards/product.resolver";
import { ProductDetailsComponent } from "./../../product-details/product-details.component";
import { ChildrenGuard } from "./../../core/guards/children.guard";
import { AuthGuard } from "./../../core/guards/auth.guard";
import { ProductsListComponent } from "./../../products-list/products-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ProductsListComponent,
    canActivate: [AuthGuard],
    canActivateChild: [ChildrenGuard],

    children: [
      {
        path: ":id",
        component: ProductDetailsComponent,
        // canDeactivate: [LoadingGuard],
        resolve: { myproduct: ProductResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
