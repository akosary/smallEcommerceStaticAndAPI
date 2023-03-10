import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss'],
})
export class CreateProductFormComponent {
  id: string = '';
  productName: string = '';
  price: string = '';
  quantity: string = '';
  imgURL: string = '';
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}
  addProduct() {
    let newObj = {
      id: Number(this.id),
      productName: this.productName,
      price: Number(this.price),
      quantity: Number(this.quantity),
      imgURL: this.imgURL,
    };
    this._productService.addProduct(newObj);
    this._router.navigate(['/product']);
  }
}
