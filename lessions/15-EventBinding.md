# 事件綁定
1. Angular透過`()`將js事件綁定至模板的元素中
示範如下
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
  <button (click)="onClick()">button</button>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  onClick(){
    alert('triggered')
  }
  constructor() { }

  ngOnInit() {
  }

}
```
2. 若想獲取事件訊息,可透過`$event`
示範如下
```ts
import { Component, OnInit } from '@angular/cor';

@Component({
  selector: 'app-event-binding',
  template: `
  <button (click)="onClick()">button</button>
  <button (click)="onClick2($event)">button2</button>
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
  constructor() { }

  ngOnInit() {
  }

}
```
3. 獲取特定事件訊息,可以透過`事件.特定事件名`
示範如下
```ts
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
```