import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
      <input type="text" name="name" placeholder="Name" ngModel /> <br />
      <input type="text" name="surname" placeholder="Surname" ngModel /> <br />
      <input type="email" name="email" placeholder="Email" ngModel /> <br />
      <input type="tel" name="tel" placeholder="Tel" ngModel /> <br />
      <!-- ngModel ile etiketledik ve consol degerini aldik 
onSubmiti export kismindan data ile cagirdik
-->
<div ngModelGroup="address">
 <input type="text" name="Country" placeholder="Country" ngModel> <br>
 <input type="text" name="City" placeholder="City" ngModel> <br>
 <input type="text" name="address" placeholder="address" ngModel> <br>
<!-- adress kismini obje olarak verdi consolda ngModelGrup ozelligi -->
</div>

      <button>Send</button>
    </form>
  `,
})
export class AppComponent {
  @ViewChild("frm", {static:true}) frm :NgForm;  // frm kismini aldik static olarak
  onSubmit(data) {
   // console.log(this.frm.value)
   //console.log(`Value : ${this.frm.value}`)
   //console.log(`Valid : ${this.frm.valid}`)
   //console.log(`Touched : ${this.frm.touched}`)  // bir input bile dolu olsa true verir
   //console.log(`Submited : ${this.frm.submitted}`)  // send butonu aktif mi 
   console.log(this.frm)
   console.log(this.frm.form)
   console.log(this.frm.controls)  // form kontrol taglari
   //console.log(data);
  }
}
