import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding2',
  template: `
  <input [(ngModel)]="val" type="text"/>
  `,
  styleUrls: ['./two-way-binding2.component.css']
})
export class TwoWayBinding2Component implements OnInit {
  val='hello'
  constructor() { }

  ngOnInit() {
  }

}