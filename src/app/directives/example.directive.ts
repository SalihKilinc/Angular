import { Directive, ElementRef, OnInit ,Input } from '@angular/core';


@Directive({
  selector: '[appExample]'   // Uygulama seviyesinde directive i kullanmamizi saglar
  // selector iki sekilde app ts kismina gider koseli parantez olursa icindeki yazilir app ts de ornegi var
  // eger sinif verilecekse class yazilarak basa kodlanir app ts de ornegi var
})
export class ExampleDirective implements OnInit {

  constructor(private element:ElementRef) {
      element.nativeElement.style.backgroundColor="red";
      
     } ngOnInit(): void{
      throw new Error ("Method not implemented");
     }

@Input() color:string;
}
