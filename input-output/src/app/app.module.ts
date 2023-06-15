import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './componnets/parent/parent.component';
import { ChildsComponent } from './componnets/childs/childs.component';
import { ChildComponent } from './components/paren_to_child_communication/child/child.component';
import { ParentsComponent } from './components/paren_to_child_communication/parents/parents.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildsComponent,
    ChildComponent,
    ParentsComponent,
  
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
