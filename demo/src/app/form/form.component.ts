import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form={
    username:'',
    password:''
  }

  onChange(x){
    console.log(x)
  }
  onSubmit(){
    console.log(this.form);

  }
  onNgSubmit(f){
    //送出ngForm表單
    console.log(f)
  }
  constructor() { }

  ngOnInit() {
  }

}
