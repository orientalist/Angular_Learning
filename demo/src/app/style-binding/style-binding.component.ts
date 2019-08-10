import { Component, OnInit } from '@angular/core';
import { isDate } from 'util';

@Component({
  selector: 'app-style-binding',
  template: `
  <p [style.background-color]="isDanger?'red':'green'" (click)="onClick()">
    style binding
  </p>
  `,
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  isDanger=false
  onClick(){
    this.isDanger=!this.isDanger
  }
  constructor() { }

  ngOnInit() {
  }

}
