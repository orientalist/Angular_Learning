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
