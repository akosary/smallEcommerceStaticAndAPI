import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductAPIsComponent } from './edit-product-apis.component';

describe('EditProductAPIsComponent', () => {
  let component: EditProductAPIsComponent;
  let fixture: ComponentFixture<EditProductAPIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductAPIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductAPIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
