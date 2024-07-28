import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { DatabindigsComponent } from './shared/components/databindigs/databindigs.component';
import { DirectivesComponent } from './shared/components/directives/directives.component';
import { CustumDirectiveComponent } from './shared/components/directives/custum-directive/custum-directive.component';
import { CustumDirectiveDirective } from './shared/components/directives/custum-directive/custum-directive.directive';
import { DecoretorComponent } from './shared/components/decoretor/decoretor.component';
import { ChildComponent } from './shared/components/decoretor/child/child.component';
import { ServiceComponent } from './shared/components/service/service.component';
import { SubjectComponent } from './shared/components/subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindigsComponent,
    DirectivesComponent,
    CustumDirectiveComponent,
    CustumDirectiveDirective,
    DecoretorComponent,
    ChildComponent,
    SubjectComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
