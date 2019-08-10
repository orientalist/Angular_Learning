# 渲染View
1. 插值表達`{{}}`:用以將組件值渲染到view
如下示範,先建立一個component,透過`template`屬性指定模板
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-pieces',
  template: `
  <h2>{{title}}</h2>
  <ul *ngIf="books.length>0">
    <li *ngFor="let book of books">{{book.name}}</li>
  </ul>
  <p *ngIf="books.length===0">暫無數據</p>
  `,
  styleUrls: ['./master-pieces.component.css']
})
export class MasterPiecesComponent implements OnInit {

  title='四大名著'
  books=[
    {
      name:'西遊記',id:1
    },
    {
      name:'三國演義',id:2
    },
    {
      name:'水滸傳',id:3
    },
    {
      name:'紅樓夢',id:4
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
```
## 示範說明
1. 透過`{{}}`插值表達式可將component屬性值渲染入模板
2. `$ngIf`可依據後方Expression回傳Boolean值決定是否增加該元素(不是隱藏)
3. `*ngFor`可遍歷component內的陣列以渲染模板