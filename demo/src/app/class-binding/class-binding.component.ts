import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <button class='btn btn-primary'>noClassBinding</button>
  <button class='btn' [class.btn-danger]="isDanger" [class.btn-primary]="!isDanger" (click)='onClick()'>ClassBinding</button>
  `,
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  isDanger:boolean=false;

  onClick(){
    this.isDanger=!this.isDanger
  }
  constructor() { }

  ngOnInit() {
  }

}
