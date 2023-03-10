import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithAPIComponent } from './products-with-api.component';

describe('ProductsWithAPIComponent', () => {
  let component: ProductsWithAPIComponent;
  let fixture: ComponentFixture<ProductsWithAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsWithAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
