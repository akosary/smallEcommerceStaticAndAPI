import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsWithAPIComponent } from './components/products-with-api/products-with-api.component';
import { ProductDetailsAPIsComponent } from './components/product-details-apis/product-details-apis.component';
import { EditProductAPIsComponent } from './components/edit-product-apis/edit-product-apis.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    LoginComponent,
    CreateProductFormComponent,
    ProductsWithAPIComponent,
    ProductDetailsAPIsComponent,
    EditProductAPIsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
