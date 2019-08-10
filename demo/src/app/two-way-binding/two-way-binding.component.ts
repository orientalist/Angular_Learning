import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
  <input [value]="val" type="text"/>
  <input #input (keyup.enter)="onKeyup(input.value)" type="text"/>
  `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  val='hello'
  others='';

  onKeyup(value:string){
    this.others=value;
    alert(this.others)
  }

  constructor() { }

  ngOnInit() {
  }

}
