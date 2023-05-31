import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
// attribute binding
cols:number = 3;

 public showChild = true
 //this message going to child component (share data parent to chile component)
 Parentmessage = "hi my name is priti"
// share sata child to parent (call parentcomponent function from child component)

parentComponent(data:any){
console.log(data);
 }
//ngdocheck created
update(){
  this.showChild = !this.showChild
}
ngOnInit() {
 
}
}
