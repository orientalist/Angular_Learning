import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomeService {

  GetData(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe((result)=>{
      console.log(result)
    })

    const promise=new Promise((resolved)=>{
      console.log('Peomise exec')
      resolved()
    }).then()


    //return {Hello:'World'}
  }
  constructor(private http:HttpClient) { }
}
