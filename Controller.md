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
    5. 管理其他組件的`生命週期`(如:建立service實體)
- 一般而言,controller不應包含太多任務,應僅包含單一view的business logic
- 保持controller輕盈之法:將不屬於controller的工作封裝為`service`,於controller中透過`相依性注入`使用。
***
# 初始化`$scope`物件
- 一般而言,建立AngularJS Application時會初始化`$scope`。
- 藉由附加屬性給`$scope`可以達成初始化。
- 註冊controller的template可以取用$scope設定的屬性。
1. template
```html
<div ng-controller='GreetingController'>
    {{greeting}}
</div>
```
2. controller
```js
var myApp=angular.module('MyApp',[])

myApp.controller('GreetingController',['$scope',function($scope){
    $scope.greeting='Hola!'
}])
```
***
# 為`$scope`加入行為(`behavior`)
- 我們可以為`$scope`設定function屬性,以供controller所屬template調用
1. Template
```html
<div ng-controller='DoubleController'>
    Two times<input ng-model='num'>equals{{double(num)}}
</div>
```
2. Controller
```js
var myApp=angular.module('myApp',[])

myApp.controller('DoubleController',['$scope',function($scope){
    $scope.double=function(value){return value*2;}
}])
```
***
# Spicy Controller案例
1. Template
```html
<div ng-controller='SpicyController'>
    <button ng-click='chiliSpicy()'>Chili</button>
    <button ng-click='jalapenoSpivt()'>Jalapeño</button>
    <p>The food is {{spice}} spicy!</p>
</div>
```
2. Controller
```js
var myApp=angular.module('spicyApp1',[]);

myApp.controller('SpicyController',['$scope',function($scope){
    $scope.spice='very';
    $scope.chiliSpicy=function(){
        $scope.spice='chili';
    }
    $scope.jalapenoSpicy=function(){
        $scope.spice='jalapeño';
    }
}])
```
***
# Spicy Controller案例(參數化)
1. Template
```html
<div ng-controller='SpicyController'>
    <input ng-model='customSpice'>
    <button ng-click='spicy("chili")'>Chili</button>
    <button ng-click='spicy(customSpice)'>custom spice</button>
    <p>The food is {{spice}} spicy!</p>
</div>
```
2. Controller
```js
var myApp=amgular.module('myApp2',[])
myApp.controller('SpicyController',['$scope',function($scope){
    $scope.customSpice='wasabi';
    $scope.spice='very';        $scope.spicy=function(spice){
        $scope.spice=spice;
    }
}])
```
***
# Scope 繼承
- 於不同層級建立Controller是常見的
- 子DOM內建立的Controller的scope會繼承父DOM的scope的屬性與值
1. Template
```html
<div class="spicy">
    <div ng-controller='MainController'>
        <p>Good {{timeOfDay}},{{name}}</p>
        <div ng-controller='ChildController'>
            <p>Good {{timeOfDay}},{{name}}</p>
            <div ng-controller='GrandChildController'>
                <p>Good {{timeOfDay}},{{name}}</p>
            </div>
        </div>
    </div>
</div>
```
2. Controller
```js
var myApp=angular.module('scopeInheritance',[]);
myApp.controller('MainController',['$scope',function($scope){
    $scope.timeOfDay='morning';
    $scope.name='Nikki';
}])
myApp.controller('ChildController',['$scope',function($scope){
    $scope.name='Mattie';
}])
    myApp.controller('GrandChildController',['$scopr',function($scope){
    $scope.timeOfDay='evening';
    $scope.name='Gingerbread Baby';
}])
```
3. 顯示結果
![inheritance](/inhe.png)
***