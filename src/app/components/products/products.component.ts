import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: any[] = [];
  Data: any;
  constructor(
    private _products: ProductService,
    private _auth: AuthService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    if (this._auth.isLoggedIn) {
      this.productList = this._products.getProducts();
    } else {
      this._router.navigate(['/login']);
    }
  }
  remove(i: number) {
    this.productList = this._products.removeProduct(i);
    console.log(this.productList);
  }
}
