import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MultipleapiService {
  url1 = "https://fakestoreapi.com/products";
  url2 = "https://fakestoreapi.com/carts";
   url3 = "https://fakestoreapi.com/users";
  constructor(private http:HttpClient) {

   }

   getProducts(): any{
    return this.http.get(this.url1)
   }
   getCarts(){

   }
   getUsers(){

   }
}
