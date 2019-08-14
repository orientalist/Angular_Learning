import { CRUDService } from './../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  constructor(private service:CRUDService) { }

  getWithError(){
    this.service.getWithError()
    .subscribe(res=>{
      if(res['errorMessage']){
        console.log(res['errorMessage'])
      }
    })
  }

  get(){
    this.service.get()
  }
  post(){
    this.service.post()
  }
  patch(){
    this.service.update()
  }
  delete(){
    this.service.delete()
  }
  getNew(){
    let observable= this.service.getNew(2)
    observable.subscribe(res=>{
      console.log(res)
    })
  }
  ngOnInit() {

  }

}
