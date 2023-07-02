import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="Name" formControlName="name" /> <br />
      <input type="text" placeholder="Surname" formControlName="surname" /> <br />
      <input type="text" placeholder="Email" formControlName="email" /> <br />
      <input type="text" placeholder="Tel" formControlName="tel" /> <br />
      <button type="submit">Send</button>
    </form>
  `
})
export class AppComponent {
  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = this.formBuilder.group({
      name: ['', [Validators.required , Validators.minLength(3)] ], // requerid olarak en az uc harf belirldik
      surname: [''],
      email: [''],
      tel: ['']
    });
  }

  onSubmit() {
    console.log(this.frm.valid)
    console.log(this.frm.value);
  }
}
