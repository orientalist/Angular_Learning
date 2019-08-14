# 將Component與Service解耦
## 以HttpClient方法為例
1. HttpClient下各方法會回傳請求結果,亦即同時有`請求數據`與`處理呼叫結果`的功能,
2. 若結果牽涉到component邏輯,應將其分離至component中
3. 若請求的url帶有參數,亦應分離作為參數傳入,而非寫死
4. 是否呼叫`.subscribe()`亦應由呼叫的component決定
5. 如下使用`.get()`,未解耦
   ```ts
   //service中自訂的get()方法
    get(){
        //url包含參數,應分昨握誒參數傳入
        //是否.subscribe()應由呼叫者決定
        this.http.get('urlToGet/1')
        .subscribe(res=>{
        //在這裡接收Get資料,會牽涉到component邏輯
        //應分離至component中
            console.log(res)
        })
    }
   ```
6. 解耦後
   1. service
    ```ts
    getNew(parameter:number){
        return this.http.get(`url/${parameter}`)
    }
    ```
    2. component
    ```ts
    getNew(){
        //由component傳遞參數
        //service只負責回傳請求
        let observable= this.service.getNew(2)
        //調用.subscribe()
        observable.subscribe(res=>{
            //在此處理獲得的數據
            console.log(res)
        })
    }
    ```