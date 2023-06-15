import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childa3',
 template:`
 <p>Child A 3 component  **** {{data}}  </p>
 `
})
export class Childa3Component {
@Input() data : string;
}
