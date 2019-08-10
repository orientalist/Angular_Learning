# Clss綁定
透過`[]`綁定Dom的class
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <button class='btn btn-primary'>noClassBinding</button>
  <button [class]="isDanger?'btn btn-danger':'btn btn-primary'" (click)='onClick()'>ClassBinding</button>
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
```
## 說明
1. 透過設定`onClick`事件設定`isDanger`的值,並透過`三元運算式`改變Dom的class
***
## 另一種寫法
```ts
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
```