import { Component ,Input,Output,EventEmitter,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
// share data parent tp child

 @Input() item = '';

// share data child to parent 
@Output() parentComponent :EventEmitter<any> = new EventEmitter()

constructor(){}

ngOnInit(): void {
  this.parentComponent.emit(" priti mani")
}
sendData(){
  let item = "priti tripathi"
  this.parentComponent.emit(item)
}
//   ngondestroy creatr
ngOnDestroy(){
  console.log("destroying child...")
}

}

