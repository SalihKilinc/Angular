import { Component } from '@angular/core';


@Component({
  selector: 'app-parent2',
  template: `
    <div style="background-color: blueviolet;">
      <p>Parent 2 component</p>

      <app-childa2 (data)="childData($event)"></app-childa2>
      <br>
      <app-childa3 [data]="Childa2Message" ></app-childa3>
    </div>
  `,
})
export class Parent2Component {
  Childa2Message: string
  childData(message:string){
this.Childa2Message=message;
  }
}

// child2 den child 3 mesaj gonderdik epey dolanbacli 
//cocuklar arasi veri gondermek icin parents e giderek aktarim olur
