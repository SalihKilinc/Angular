import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`<p>Bonjour</p>
  <hr>
  <div style="background-color: yellow;">
<app-home> </app-home>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj1';
}
