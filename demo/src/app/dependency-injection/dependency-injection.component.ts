import { Component, OnInit } from '@angular/core';
import { SomeService } from '../some.service'

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {

  data:any
  constructor(
    private service:SomeService
  ) { }

  ngOnInit() {
    this.data=this.service.GetData()
    console.log(this.data)
  }

}
