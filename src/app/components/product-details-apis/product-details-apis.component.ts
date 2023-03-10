import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details-apis',
  templateUrl: './product-details-apis.component.html',
  styleUrls: ['./product-details-apis.component.scss'],
})
export class ProductDetailsAPIsComponent implements OnInit {
  product: any;
  id?: number;
  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this._productService.getById(this.id).subscribe({
      next: (response) => {
        this.product = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
