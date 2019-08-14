import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/Operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  getWithError() {
    return this.http.get('abc/def')
      .pipe(
        catchError((err: HttpErrorResponse) => {
          let errorMessage: string
          switch (err.status) {
            case 400:
              errorMessage = "參數錯誤"
              break;
            case 404:
              errorMessage = "不存在"
              break;
            default:
              errorMessage = "異常錯誤"
              break;
          }
          return of({ errorMessage: errorMessage })
        })
      )
  }

  getNew(parameter: number) {
    return this.http.get(`url/${parameter}`)
  }

  //get多半用於 查詢
  get() {
    console.log('get triggered')
    //.get('url')
    this.http.get('urlToGet')
      .subscribe(res => {
        //在這裡接收Get資料
        console.log(res)
      })
  }

  //post多半用於 新增
  post() {
    console.log('post triggered')
    //.post('url',請求體)
    this.http.post('urlToPost', { title: '123' })
      .subscribe(res => {
        //在這裡處理post結果
        console.log(res)
      })
  }

  //update多半用於 更新
  update() {
    console.log('update triggered')
    //.patch('url/更新對象',請求體)
    this.http.patch('urlToPatch/更新對象', { title: '456' })
      .subscribe(res => {
        //在這裡處理更新結果
        console.log(res)
      })
  }

  //delete多半用於 刪除
  delete() {
    console.log('delete triggered')
    //.delete('url/刪除對象')
    this.http.delete('urlToDelete/刪除對象')
      .subscribe(res => {
        //在這裡已處理刪除結果
        console.log(res)
      })
  }

  constructor(private http: HttpClient) { }
}
