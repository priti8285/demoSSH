import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({

  providedIn: 'root'

})
export class DataService {
 url =  "https://fakestoreapi.com/products"
 // multiples api call
 
 constructor( private http:HttpClient ) { }

  getData(){

   return this.http.get(this.url);

     }

  }

