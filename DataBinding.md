# DataBinding in AngularJS
## 概論
在AngularJS中,資料綁定為介於`model`與`view`間`自動,同步,雙向`的,此方法使model達到`single-source-of-truth`,view成為model資料的`projection`(投射)。
***
## 單向資料綁定
- 大多數的templating是`單向`的,這意味著僅會`一次性`合併templating與model並投射到view上。
- 因此,`model-view`與`view-model`雙向的資料變動須另外撰寫程式碼完成。

![oneWayBinding](https://docs.angularjs.org/img/One_Way_Data_Binding.png)
***
## 雙向資料綁定
- 在AngularJS中,template(uncompiled html along with any additional markup or directives),在browser中被編譯,產生`live view`,任何對view的修改會反射到model,反之亦然。
- 因此,view可以視為model的投射
- `controller`因此可以從view中分離出來,controller與view或DOM的耦合解放,達到獨立測試的目的。

![twoWayBinding](https://docs.angularjs.org/img/Two_Way_Data_Binding.png)