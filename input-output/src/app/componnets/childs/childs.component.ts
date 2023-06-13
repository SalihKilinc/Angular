import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childs',
 template: `
 <p>child works</p>
 `
 
 
})
export class ChildsComponent {
 @Input() childsData:any;
}
