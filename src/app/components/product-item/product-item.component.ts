import { IProduct } from './../../Models/iproduct';
import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() products: IProduct[] = [];
  @Input() product: IProduct | null = null;
  @Input() index: number = 0;
  constructor(private _products: ProductService) {
    this.products = this._products.getProducts();
  }
  remove(i: number) {
    this.products = this._products.removeProduct(i);
    console.log(this.products);
  }
}
