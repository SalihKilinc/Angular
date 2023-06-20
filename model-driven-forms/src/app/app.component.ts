import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="Name" formControlName="name" /> <br />
      <input type="text" placeholder="Surname" formControlName="surname" />
      <br />
      <input type="email" placeholder="Email" formControlName="email" /> <br />
      <input type="tel" placeholder="Tel" formControlName="tel" /> <br />
      <div formGroupName="address">
        <input type="text" placeholder="Country" formControlName="country" />
        <br />
        <input type="text" placeholder="City" formControlName="city" /> <br />
        <input type="text" placeholder="Address" formControlName="address" />
        <br />
      </div>
      <button>Send</button>
    </form>
    <button (click)="ok()">YES</button>
    Valid : {{ frm.valid }}
    <!-- formun alltinda olan degerin true false olmasini denetler -->
  `,
})
export class AppComponent {
  // title = "model-driven-forms-example"

  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ['', Validators.required], // required atadik react gibi ama bunu formda tanimlamman gerek ustteki gibi
      surname: [''],
      email: [''],
      tel: [''],
      address: formBuilder.group({
        country: [''],
        city: [''],
        address: [''], // adres kismini farkli ayri alir consolda
      }),
    });
  }
  ok() {
    this.frm.get('name').setValue('Asus', { onlySelf: false }); // onlyself true degeri verdigimizde nokta atisi denetler
  }
  onSubmit() {
    console.log(this.frm.value);
  }
}
