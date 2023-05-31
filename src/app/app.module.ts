import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SubjectComponent } from './subject/subject.component';
import { HeaderComponent } from './header/header.component';
import { SubjecttwoComponent } from './subjecttwo/subjecttwo.component';
import { GetresponseComponent } from './getresponse/getresponse.component';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { CustomDirective } from './directive/custom.directive';
import {EagerModuleOneModule} from './eager-module-one/eager-module-one.module';
import {EagerModuleTwoModule} from './eager-module-two/eager-module-two.module';
import { TemplateContainerComponent } from './template-container/template-container.component';
// import { MultipleComponent } from './multiple/multiple.component';
import { MultipleapiComponent } from './multipleapi/multipleapi.component';
import { PipeComponent } from './pipe/pipe.component';
// import { CustompipePipe } from './custompipe.pipe';
import { CustompipesPipe } from './custompipes/custompipes.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SubjectComponent,
    HeaderComponent,
    SubjecttwoComponent,
    GetresponseComponent,
    TemplateDrivenFormComponent,
    ReactiveFormsComponent,
    CustomDirective,
    TemplateContainerComponent,
    
    MultipleapiComponent,
    PipeComponent,
    // CustompipePipe,
    CustompipesPipe,
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EagerModuleOneModule,
EagerModuleTwoModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
