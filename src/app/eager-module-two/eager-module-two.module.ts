import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerModuleTwoRoutingModule } from './eager-module-two-routing.module';
import { EagerModuleTwoComponent } from './eager-module-two.component';
console.log("eagaer module loaded");

@NgModule({
  declarations: [
    EagerModuleTwoComponent
  ],
  imports: [
    CommonModule,
    EagerModuleTwoRoutingModule
  ]
})
export class EagerModuleTwoModule { }
