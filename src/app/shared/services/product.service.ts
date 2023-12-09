import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = `${environment.baseUrl}`



  constructor( private _http : HttpClient) { }

  // getProdData () {

  // }

  getProdData(): Observable<Product[]> {
    return this._http.get<Product[]>(this.productUrl);
  }
  // getProdData(): Observable<any> {
  //   return this._http.get<any>(this.productUrl);
  // }


}
