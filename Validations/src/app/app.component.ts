import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { capitalletterValidator } from './validators/func'; // validators classinin icinde verdigimiz donguden dolayi ilk harfin buyuk olmasini istedik yoksa hata verir

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="Name" formControlName="name" /> <br />
      <div *ngIf="!name.valid && (name.dirty || name.touched)">
        {{ name.errors | json }}
      </div>

      <input
        type="text"
        placeholder="Surname"
        formControlName="surname"
      /><br />
      <div *ngIf="!surname.valid && (surname.dirty || surname.touched)">
        {{ surname.errors | json }}
      </div>

      <input type="text" placeholder="Email" formControlName="email" /> <br />
      <div *ngIf="!email.valid && (email.dirty || email.touched)">
        {{ email.errors | json }}
      </div>

      <input type="text" placeholder="Tel" formControlName="tel" /> <br />
      <button type="submit">Send</button>
    </form>
  `,
})
export class AppComponent {
  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = this.formBuilder.group({
      name: [
        '',
        [Validators.required, Validators.minLength(3), capitalletterValidator],
      ], // requerid olarak en az uc harf belirldik
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      tel: [''],
    }, {Validators:[]});
  }
  get name() {
    return this.frm.get('name');
  }
  get surname() {
    return this.frm.get('surname');
  }
  get email() {
    return this.frm.get('email');
  }
  get tel() {
    return this.frm.get('tel');
  }
  onSubmit() {
    console.log(this.frm.valid);
    console.log(this.frm.value);
  }
}
