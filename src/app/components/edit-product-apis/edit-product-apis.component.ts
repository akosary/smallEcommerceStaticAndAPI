import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product-apis',
  templateUrl: './edit-product-apis.component.html',
  styleUrls: ['./edit-product-apis.component.scss'],
})
export class EditProductAPIsComponent implements OnInit {
  constructor(
    private _router: Router,
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute
  ) {}
  product: any;
  productId: number = Number(this._activatedRoute.snapshot.paramMap.get('id'));
  productForm: any = new FormGroup({
    id: new FormControl(),
    productName: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
    imgURL: new FormControl(),
  });

  ngOnInit(): void {
    if (this.productId != 0) {
      this._productService
        .getById(Number(this._activatedRoute.snapshot.paramMap.get('id')))
        .subscribe({
          next: (response) => {
            this.product = response;
            this.productForm.controls.id.setValue(this.product.id);
            this.productForm.controls.productName.setValue(
              this.product.productName
            );
            this.productForm.controls.price.setValue(this.product.price);
            this.productForm.controls.quantity.setValue(this.product.quantity);
            this.productForm.controls.imgURL.setValue(this.product.imgURL);
          },
        });
    }
  }
  edit(e: Event) {
    e.preventDefault();
    console.log(this.productForm);
    if (this.productForm.status == 'VALID') {
      if (this.productId != 0) {
        this._productService
          .edit(this.product.id, this.productForm.value)
          .subscribe();
      } else {
        this._productService.create(this.productForm.value).subscribe();
      }
      this._router.navigate(['/productAPI']);
    }
  }
}
