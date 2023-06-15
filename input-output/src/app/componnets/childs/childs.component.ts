import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childs',
 template: `
 <div style="background-color: yellow;" >
 <p>child works</p>
 {{childsData}}
 </div>

 `
 
 
})
export class ChildsComponent {
 @Input() childsData:any;
}
