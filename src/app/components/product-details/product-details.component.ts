import { IProduct } from './../../Models/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product?: IProduct;
  productId: number = 0;
  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.product = this._productService.getProductById(this.productId);
  }
  remove(id: number) {
    // this._productService.getProducts().filter;
  }
}
