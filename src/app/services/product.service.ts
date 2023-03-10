import { HttpClient } from '@angular/common/http';
import { IProduct } from './../Models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _httpClient: HttpClient) {}

  private productList: IProduct[] = [
    {
      id: 1,
      productName: 'Roage',
      price: 300,
      quantity: 4,
      imgURL: '/assets/imgs/cosmetics/1.jpg',
    },
    {
      id: 2,
      productName: 'Cosmetic 2',
      price: 300,
      quantity: 4,
      imgURL: '/assets/imgs/cosmetics/2.jpg',
    },
    {
      id: 3,
      productName: 'Cosmetic 3',
      price: 300,
      quantity: 4,
      imgURL: '/assets/imgs/cosmetics/3.jpg',
    },
    {
      id: 4,
      productName: 'Cosmetic 4',
      price: 300,
      quantity: 0,
      imgURL: '/assets/imgs/cosmetics/4.jpg',
    },
    {
      id: 5,
      productName: 'Cosmetic 5',
      price: 300,
      quantity: 4,
      imgURL: '/assets/imgs/cosmetics/5.jpg',
    },
    {
      id: 6,
      productName: 'Cosmetic 6',
      price: 300,
      quantity: 1,
      imgURL: '/assets/imgs/cosmetics/6.jpg',
    },
  ];

  //Static Data
  getProducts() {
    return this.productList;
  }
  getProductById(id: number) {
    return this.productList.filter((product) => product.id == id)[0];
  }
  addProduct(obj: {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    imgURL: string;
  }) {
    this.productList.push(obj);
  }
  removeProduct(i: number) {
    this.productList = this.productList.filter((item, index) => index != i);
    return this.productList;
  }

  baseURL: string = 'http://localhost:3000/posts';
  //APIs Data
  show() {
    return this._httpClient.get(this.baseURL);
  }
  getById(id: number) {
    return this._httpClient.get(`${this.baseURL}/${id}`);
  }
  edit(id: number, body: any) {
    return this._httpClient.put(`${this.baseURL}/${id}`, body);
  }
  create(body: any) {
    return this._httpClient.post(this.baseURL, body);
  }
  delete(id: number) {
    return this._httpClient.delete(`${this.baseURL}/${id}`);
  }
}
