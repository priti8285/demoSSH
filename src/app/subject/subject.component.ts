import { Component } from '@angular/core';
import { CommunicationEachComponentService } from '../service/communication-each-component.service';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  
  constructor( private messageService: CommunicationEachComponentService){}

   sendMessage(message:string){
    this.messageService.sendMessage(message);
   
  }
  
  
}
