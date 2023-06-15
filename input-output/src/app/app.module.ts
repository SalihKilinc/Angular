import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './componnets/parent/parent.component';
import { ChildsComponent } from './componnets/childs/childs.component';
import { ChildComponent } from './components/paren_to_child_communication/child/child.component';
import { ParentsComponent } from './components/paren_to_child_communication/parents/parents.component';
import { Parent2Component } from './components/paren_to_child_communication/parent2/parent2.component';
import { Childa2Component } from './components/paren_to_child_communication/childa2/childa2.component';
import { Childa3Component } from './components/paren_to_child_communication/childa3/childa3.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildsComponent,
    ChildComponent,
    ParentsComponent,
    Parent2Component,
    Childa2Component,
    Childa3Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
