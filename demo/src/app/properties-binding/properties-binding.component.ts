import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-binding',
  template: `<img [src]="imgUrl">`,
  styleUrls: ['./properties-binding.component.css']
})
export class PropertiesBindingComponent implements OnInit {
  imgUrl='https://i.ytimg.com/vi/v6e5VKYz3xo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBmok3AeeaqmYARXrYttWVIq1pj8g'
  constructor() { }

  ngOnInit() {
  }

}
