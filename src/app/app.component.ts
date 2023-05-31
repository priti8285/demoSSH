import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  toggle = true;
  status = "Enable";
  // interpolation
  name = 'interpolation-binding'
// property binding 
item = "property-binding";
disabled = "false"

  enabledisableRule(){
    this.toggle = !this.toggle;
    this.status = this.toggle ? "Enable" : "Disable";
  }
 
}
