import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  // Pipe'in kullanildigi degeri manipule/transform etmemizi saglayan fonksiyondur
  // b harfinden sonra soru isareti koyduk optionel hale gelmesi icin app ts de duzgun calisti boylece
  transform(value: string, a:number , b?:number): string  {
    return value.slice(a,b);
  }

}
