import { Component } from '@angular/core';

@Component({
  selector: 'app-parents',
  template: `
    <p>Parents Components</p>
    <app-child (dataEvent)="(childEvent)($event)"></app-child>  <!--Childden cagirdik burda alttada konsola yazdirdik-->
  `,
})
export class ParentsComponent {
  childEvent(obj:any) {
  
    console.log(obj)
  }
}
