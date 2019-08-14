# 錯誤處理
## 以HttpClient方法為例
1. HttpClient方法(.get()等)會回傳observable物件
2. 可透過`.pipe()`方法加入對錯誤的處理
3. 當該方法被`.subscribe()`時,會視情形調用成功/錯誤方法
4. service如下
```ts
getWithError() {
    //透過.pipe()處理錯誤,務必返回observable物件
    return this.http.get('abc/def')
      .pipe(
          //引用自import { catchError } from 'rxjs/Operators';
          //若上方方法失敗,依次執行其內部方法
        catchError((err: HttpErrorResponse) => {
          let errorMessage: string
          //在此依據status加工回傳訊息
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
          //import { of } from 'rxjs';用以回傳observable物件
          return of({ errorMessage: errorMessage })
        }
      )
    )
  }
```
5. component如下
```ts
getWithError(){
    this.service.getWithError()
    .subscribe(res=>{
        //處理錯誤
      if(res['errorMessage']){
        console.log(res['errorMessage'])
      }
    })
  }
```