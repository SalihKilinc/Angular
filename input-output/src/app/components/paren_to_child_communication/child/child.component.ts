import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template:`
  <p>Child Component</p>

  `
  
})
export class ChildComponent implements OnInit {
ngOnInit(): void {
  this.dataEvent.emit({message:"Salut"})
}
@Output() dataEvent : EventEmitter<any> = new
EventEmitter();


}
