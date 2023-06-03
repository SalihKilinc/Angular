import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`<p>Bonjour</p>

<app-home [pageName]="title2 ">   //Property Binding</app-home>

  <hr>
  <div style="background-color: yellow;">
<app-home> </app-home>
<h1>{{title}}</h1>
<input type= "text" [value]= "title">
</div>

<!--Two-Way Data Binding-->

 <!-- 
<input type="text" [(ngModel)]="name">  <br>
<input type="text" [(ngModel)]="name">  <br>

{{name}} 

-->

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj1';
  title2="proj2"
  name: string 
}
