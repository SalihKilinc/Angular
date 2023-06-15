import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>Parent works!!</p>
    <app-childs childsData="Asus Klavye"></app-childs>
  `,
})
export class ParentComponent {
  data: string = 'Bonjour';
}
