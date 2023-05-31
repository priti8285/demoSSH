import { Component } from '@angular/core';
import { CommunicationEachComponentService } from '../service/communication-each-component.service';

@Component({
  selector: 'app-subjecttwo',
  templateUrl: './subjecttwo.component.html',
  styleUrls: ['./subjecttwo.component.css']
})
export class SubjecttwoComponent {
  message : string; 

  constructor(private messageService: CommunicationEachComponentService){}

  ngOnInit(): void {

    this.messageService.receivedMessage().subscribe((d) =>{
      this.message = d;
   
    })
  }
}


