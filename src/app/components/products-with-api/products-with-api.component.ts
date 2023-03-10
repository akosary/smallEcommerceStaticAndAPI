import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-with-api',
  templateUrl: './products-with-api.component.html',
  styleUrls: ['./products-with-api.component.scss'],
})
export class ProductsWithAPIComponent implements OnInit, OnChanges {
  products: any;
  productForm: any = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
    imgURL: new FormControl(),
  });
  constructor(private _productService: ProductService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.products = this._productService.show().subscribe({
      next: (response) => {
        this.products = response;
      },
    });
  }
  ngOnInit(): void {
    this.products = this._productService.show().subscribe({
      next: (response) => {
        this.products = response;
      },
    });
  }

  remove(id: number) {
    // this.products=
    this._productService.delete(id).subscribe((response) => {
      this.products = this.products.filter((product: any) => product.id != id);
    });
  }
  // edit(e: Event) {
  //   e.preventDefault();
  //   this._productService.edit()
  // }
}
