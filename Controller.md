# Controller
- 在AngularJS中,controller是由`constructor function`(建構方法)產生至`AngularJS Scope`
- controller可由多種方法附加至DOM中,如下：
    1. `ngController`:會建立`child scope`,`$scope`會作為可取用的可注入注入參數於建構方法中。
    2. `$route controller`:路由controller
    3. controller of `regular directive`,or a `compoment directive`
- 若使用`controller as`,則controller會於scope內指派給特定屬性
- 應該將controller用於：
    1. 初始化`$scope`物件
    2. 位`$scope`加入行為(方法)
- 不應將controller用於：
    1. 操作DOM:controller應該只包含`business logic`,加入任何表現邏輯會影響到其`可測試性`,若要操作DOM,應透過`databinding`與`directives`以封裝對DOM的操作
    2. 格式化input:應使用`AngularJS form controls`
    3. 篩選輸出(filter output):應使用`AngularJS filters`
    4. 分享程式碼或狀態:應透過`AngularJS services`
    5. 管理其他組件的`生命週期`: