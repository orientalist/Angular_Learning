import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  border='1px solid red';
  data='passToChild';
  change(){
    alert('change')
  }
  constructor() { }

  ngOnInit() {
  }

}