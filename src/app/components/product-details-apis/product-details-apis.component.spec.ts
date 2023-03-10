import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsAPIsComponent } from './product-details-apis.component';

describe('ProductDetailsAPIsComponent', () => {
  let component: ProductDetailsAPIsComponent;
  let fixture: ComponentFixture<ProductDetailsAPIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsAPIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsAPIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
