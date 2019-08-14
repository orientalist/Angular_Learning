import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MasterPiecesComponent } from './master-pieces/master-pieces.component';
import { PropertiesBindingComponent } from './properties-binding/properties-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TwoWayBinding2Component } from './two-way-binding2/two-way-binding2.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormComponent } from './form/form.component';
import { HttpComponent } from './http/http.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { HttpClientModule } from '@angular/common/http';
import { CRUDComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MasterPiecesComponent,
    PropertiesBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    TwoWayBinding2Component,
    ClassBindingComponent,
    StyleBindingComponent,
    ParentComponent,
    ChildComponent,
    PipeComponent,
    FormComponent,
    HttpComponent,
    DependencyInjectionComponent,
    CreateServiceComponent,
    CRUDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }