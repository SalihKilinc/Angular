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
      <div formGroupName="address">
        <input type="text" placeholder="Country" formControlName="country" /> <br />
        <input type="text" placeholder="City" formControlName="city" /> <br />
        <input type="text" placeholder="Address" formControlName="address" /> <br />
      </div>
      <button>Send</button>
    </form>

    <button (click)="markAsTouched()">markAsTouched</button> <br>
    <button (click)="markAllAsTouched()">markAllAsTouched</button> <br>
    <button (click)="markAsUnTouched()">markAsUnTouched</button> <br>
    <button (click)="markAsDirty()">markAsDirty</button> <br>
    <button (click)="markAsPristine()">markAsPristine</button> <br>
    <button (click)="disable()">disable</button> <br>
    <button (click)="enable()">enable</button> <br>

    form touched: {{ frm.touched }} <br>
    "name" form control touched: {{ frm.get("name").touched }} <br>
    <hr>
    form dirty: {{ frm.dirty }} <br>
    "name" form control dirty: {{ frm.get("name").dirty }} <br>
    <hr>
    form touched: {{ frm.pristine }} <br>
    "name" form control pristine: {{ frm.get("name").pristine }}
  `
})
export class AppComponent {

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
  markAsTouched(){
this.frm.markAsTouched()
this.frm.get("name").markAsTouched()
  }
  markAllAsTouched(){

  }
  markAsUnTouched(){

  }
  markAsDirty(){

  }
markAsPristine(){

}
disable(){

}
enable(){

}
onSubmit(){
  console.log(this.frm.value)
}
}



