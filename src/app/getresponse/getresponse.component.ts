import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import {HttpClient}  from "@angular/common/http";
@Component({
  selector: 'app-getresponse',
  templateUrl: './getresponse.component.html',
  styleUrls: ['./getresponse.component.css']
})
export class GetresponseComponent {
  user : any
constructor (private service:DataService, private http: HttpClient){}

ngOnInit(): void {
  this.service.getData().subscribe(res => {
      this.user = res;
      console.log('data response', this.user);

  });

}

}
