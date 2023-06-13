import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`<p>Bonjour</p>
{{name | uppercase}} <!--Ismi buyuk harfe cevirdi -->
{{name | slice:1:4}}  <!--Ismi indexe gore boldu --> <br>
{{"belki ustumuzden bir kus gecer kanadindan bir tuy duser ..." | custom : 5:20}}
<!-- CustomPipe kismindan cagirdik sarki sozunu ve ordaki degeri optionel yaptik soru isareti koyarak yoksa hata verirdi -->


  `,

  
})
export class AppComponent {
  constructor(private custom: CustomPipe){
console.log(custom.transform("repeating" , 2,8)) // consolda yazar
  }
  name = "Kenan";

}



