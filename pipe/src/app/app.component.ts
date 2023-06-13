import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`<p>Bonjour</p>
{{name | uppercase}} <!--Ismi buyuk harfe cevirdi -->
{{name | slice:1:4}}  <!--Ismi indexe gore boldu -->


  `,

  styles: [".myclass{background-color :red;}"],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = "Kenan";
}



