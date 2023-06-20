import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
<form [formGroup]="frm" (ngSubmit)="onSubmit()">
  <input type="text" placeholder="Name" formControlName="name"> <br>
  <input type="text" placeholder="Surname" formControlName="surname"> <br>
  <input type="email" placeholder="Email" formControlName="email"> <br>
  <input type="tel" placeholder="Tel" formControlName="tel"> <br>
  <button>Send</button>
</form>

  `,


})
export class AppComponent {


  // title = "model-driven-forms-example"

  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: [""],
      surname: [""],
      email: [""],
      tel: [""]
    })
  }
  onSubmit() {
    console.log(this.frm.value)
  }
}



