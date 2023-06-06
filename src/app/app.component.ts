import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`<p>Bonjour</p>

<app-home [pageName]=" ">   //Property Binding</app-home>
<!--


  <hr>
  <div style="background-color: yellow;">
<app-home> </app-home>
<h1>{{title}}</h1>
<input type= "text" [value]= "title">


</div>
-->

<!--Two-Way Data Binding

 
<input type="text" [(ngModel)]="name">  <br>
<input type="text" [(ngModel)]="name">  <br>

{{name}} 

ayni anda birden fazla name doldurur . react da yapilan rafce sonrasi js isimlerinin degismesi gibi dusun

-->
 <!-- One Data Binding  -->
<!--
<p>{{title3}}</p>
<p>{{text}}</p>
{{sayi}}
<p>{{text}} à tous</p>  <!-- ngNonBindable operatoru -->
 

<!--Nullable operatoru  


<p>{{person?.name}}</p>  
<!--Nullable operatorunde ternary mantigi vardir soru isareti olmazsa hata alinirbos olmasina karsin alinan bir onlemdir -->


<!-- ngFor Directive  
<ul>
  <li *ngFor="let name of names ">{{name}}</li>
  <li *ngFor="let name of names; index as i "> {{name}}- {{i}}</li>
  <li *ngFor="let name of names; let index = index let first =first; "> {{name}}- {{index}} {{first}}</li>  // ilk elemani goster ismi goster indexi goster 
</ul>

-->

<!-- ngIf  

<div *ngIf="visible">Bonjour true yaparsak alttakini ezer ve bonjour gorunur </div>
<div *ngIf="false">Bonjour yazisini false ile call yaparsak ekranda gorunmez</div>  

-->

<!-- ngIf Else -->

<div *ngIf="visible;else elseContent">Bonjour true yaparsak asagidan alttakini ezer ve bonjour gorunur </div>
<ng-template #elseContent> Bonjour yazisini false ile call yaparsak ekranda gorunmez  </ng-template>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj1';
  title2="proj2"
  title3="proj3"
  name: string 
  sayi :number= 5;  // number operatoru ile esitlik veya islem yapilmaz bu kisimda sadce yazdirilir
  text: string="Salut";
  person : {name:string ,surname : string}
  names: string  [] = ["Alex" , "Haaland" , "Ilkay" , "Mbappe" , "Benzema"]
visible : boolean =false;


}
