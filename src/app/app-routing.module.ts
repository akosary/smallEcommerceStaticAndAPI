import { ProductDetailsAPIsComponent } from './components/product-details-apis/product-details-apis.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { ProductsWithAPIComponent } from './components/products-with-api/products-with-api.component';
import { EditProductAPIsComponent } from './components/edit-product-apis/edit-product-apis.component';

const routes: Routes = [
  { path: 'product', component: ProductsComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent },
  { path: 'productDetailsAPI/:id', component: ProductDetailsAPIsComponent },
  { path: 'createProduct', component: CreateProductFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productAPI', component: ProductsWithAPIComponent },
  { path: 'editProductAPI/:id', component: EditProductAPIsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
