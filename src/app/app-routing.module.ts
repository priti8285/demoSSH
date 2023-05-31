import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GetresponseComponent } from './getresponse/getresponse.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { MultipleapiComponent } from './multipleapi/multipleapi.component';

const routes: Routes = [
  {  path : 'parent',component:ParentComponent },
  {  path : 'child',component: ChildComponent  },
  {  path : 'getresponse',component: GetresponseComponent},
  {path:'templateform',component:TemplateDrivenFormComponent},
  {path:'reactiveform',component:ReactiveFormsComponent},
  {path:'multipleapi', component:MultipleapiComponent},
 {path :'admin', loadChildren:() =>import("./admin/admin.module").then(mod=>mod.AdminModule) },
 {path:'user', loadChildren:()=>import("./user/user.module").then(mod=> mod.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
