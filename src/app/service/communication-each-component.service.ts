import { Injectable } from '@angular/core';
import { Subject, Observable ,BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CommunicationEachComponentService {
// using subject method=======>

  // private subject = new Subject<string>();

  // using behavior subject method ====>
  
  
  private subject = new BehaviorSubject<string>("baba")

  constructor() { }

  sendMessage(message: any) {
    this.subject.next(message);

  }
  receivedMessage(): Observable<string> {
    return this.subject.asObservable();
  }

}
