import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
  <button (click)="onClick()">button</button>
  <button (click)="onClick2($event)">button2</button>
  <input (keyup.enter)="enterEvent()"/>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  onClick(){
    alert('triggered')
  }
  onClick2($event){
    console.log($event)
  }
  enterEvent(){
    alert('enter event was triggered')
  }
  constructor() { }

  ngOnInit() {
  }

}
