import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('source')source:any
  @Output() change=new EventEmitter();
  onClick(){
    this.change.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
