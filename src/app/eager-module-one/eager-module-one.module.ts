import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerModuleOneRoutingModule } from './eager-module-one-routing.module';
import { EagerModuleOneComponent } from './eager-module-one.component';
console.log("eagaer module one loaded ");


@NgModule({
  declarations: [
    
  
  
  
    
  
    EagerModuleOneComponent
  ],
  imports: [
    CommonModule,
    EagerModuleOneRoutingModule
  ]
})
export class EagerModuleOneModule { }
