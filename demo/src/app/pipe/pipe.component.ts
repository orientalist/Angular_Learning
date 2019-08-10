import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  example={
    date:new Date(),
    title:'welcome to angular course',
    number:123.456789
  }
  constructor() { }

  ngOnInit() {
  }

}
