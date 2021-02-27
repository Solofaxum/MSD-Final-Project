/**Imported Liabraries */
import { Injectable, ViewChild, ElementRef } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from "rxjs/operators"
import * as _ from 'lodash';
/**Product interface for type control */
interface IProduct {
  farmname: String,
  title: String,
  price: number,
  description: String,
  image: String
}

/**Class decorator */
@Injectable({
  providedIn: 'root'
})

export class FarmerService {
  public data = 'http://localhost:7000';
  public token;
  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;
  files = [];
  constructor(private _http: HttpClient ) {
    this.token = localStorage.getItem('token');
  }

  /**Create product service */
  createProducts(formData) {
    return this._http.post<IProduct>(`${this.data}/api/farmers/prods`,
     formData, {
      headers: { Authorization: "Bearer " + this.token }
    });

  }

  /**Get all products Service */
  getProducts() {
    return this._http.get(`${this.data}/api/farmers/prods`, {
      headers: { Authorization: "Bearer " + this.token }
    }).pipe(map(data => _.values(data)));

  }

  /**Set token to authorize  individual users (Serice) */
  setToken(token: any) {
    this.token = token;
    localStorage.setItem('token', token)

  }

  /**Authorize users to update thir products (service) */
  updateProducts(id, formData) {
    return this._http.patch<IProduct>(`${this.data}/api/farmers/prods/${id}`, formData,
      { headers: { Authorization: "Bearer " + this.token } });
  }


  /**Authorize users to delete thir products (service) */
  deleteProduct(id) {
    return this._http.delete<IProduct>(`${this.data}/api/farmers/${id}`,
      { headers: { Authorization: "Bearer " + this.token } })
  }

  /**upload file */
  // upload(fileInput) {
  //   this.fileInput.nativeElement.value = '';
  // };

  /**Get all orders */
  getOrders() {
    return this._http.get(`${this.data}/api/orders`, {
      headers: { Authorization: "Bearer " + this.token }
    }).pipe(map(data => _.values(data)));

  }


  /**get update orders */
  updateOrders(status, orderId) {
    return this._http.patch<IProduct>(`${this.data}/api/orders`, {
      status, orderId
    },
      { headers: { Authorization: "Bearer " + this.token } });
  }


  postImages(formData) {
    return this._http.patch<IProduct>(`${this.data}/api/file`, formData,
      { headers: { Authorization: "Bearer " + this.token } })
  }
}



