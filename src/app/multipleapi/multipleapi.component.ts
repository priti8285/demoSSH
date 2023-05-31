import { Component } from '@angular/core';
import { MultipleapiService } from '../service/multipleapi.service';

@Component({
  selector: 'app-multipleapi',
  templateUrl: './multipleapi.component.html',
  styleUrls: ['./multipleapi.component.css']
})
export class MultipleapiComponent {
  products : any
  
  constructor (private multiple:MultipleapiService,){}


  ngOnInit() {
 this.multiple.getProducts().subscribe((res: any)=>{
  this.products = res;
  console.log('data response', this.products);
 })
  }
}


