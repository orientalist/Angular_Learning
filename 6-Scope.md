# What are `Scopes`?
## Scope characteristics
1. Scope是`類DOM繼承結構`的物件。
2. `$watch` API以觀測model變化
3. `$apply` API以傳播model變化投射到`view`上
4. 透過`巢狀`結構控制屬性值的`控制權`同時也透過此`分享`屬性控制權,巢狀scope包括`child`與`isolate` scope
5. `Scope`提供上下文關係,例如{{username}}若不在scope中無意義,除非先在其所處的scope內定義`username`
***
## Scope as Data-model
Scope是`conreoller`與`view`間的橋樑,在template與directives連結過程中會於scope內產生`$watch`用以監控屬性值的變化,directives藉此渲染與更新DOM。

controller與directive皆能存取scope,而不是直接存取彼此,如此一來,controller得以孤立,進而得以測試
1. Template
```html
<div ng-controller='MyController'>
    Your name:
    <input type="text" ng-model='username'>
    <button ng-click='sayHello()''>great</button>
    <hr>
    {{greeting}}
</div>
```
2. Controller
```js
angular.module('scopeExample',[]).controller('MyController',['$scope',function($scope){
    $scope,username='World!';

    $scope.sayHello=function(){
        $scope.greeting=`Hello ${$scope.username}!`
    }
}])
```
解釋:
1. MyController首先給username賦值(controller-scope)
2. input展示username值(scope-view)
3. MyController指派方法給sayHello(controller-scope),產生greeting屬性(username-當scope屬性與html綁定後會自動同步)
4. `{{greeting}}`
   1. 向上檢索該屬性所在的scope,此例等同於傳入MyController的scope
   2. 依照greeting的語法取得需要的值(username),並渲染到DOM中
5. 可以將scope與其屬性視為渲染view的資料
6. scope對於關聯的view是`single source-of-truth`
7. 以測試觀點來講,將controller與view分離是必要的,如此一來,測試controller便不需要分神於view的渲染
- Unit test
```js
it('should say hello',function(){
    var scopeMonk={};
    var cntl=new MyController(scopeMonk);

    expect(scopeMonk.username).toEqual('World');

    scopeMonk.username='angular';
    scopeMonk.sayHello();
    expect(scopeMonk.greeting).toEqual('Hello angular!');
})
```
***
## `Scope Hierarchies`(階層結構)
1. 所有應用程式基本上都有一個`root scope`以及多個`child scopes`
2. 藉由directives可以建立多個`child scopes`,並以`DOM`的階層式結構附加至`parent scope`上
3. 當AngularJS遇到AngularJS屬性(如`{{name}}`),首先會檢索該屬性所在scope是否有值,若否則向上層檢索

釋例:
1. Template
```html
<div class="show-scope-demo">
    <div ng-controller='GreetController'>
        Hello {{name}}!
    </div>
    <div ng-controller='ListController'>
        <ol>
            <li ng-repeat='name in names'>{{name}} from {{department}}</li>
        </ol>
    </div>
</div>
```
2. Controller
```js
angular.module('scopeExample',[])
.controller('GreetingController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.name='World';
    $rootScope.department='AngularJS';
}])
.controller('ListController',['$scope',function($scope){
    $scope.names=['Igor','Misko','Vojta'];
}])
```
3. 圖例
![Inheritance](/inheritance.png)
![Inheritance](https://docs.angularjs.org/img/guide/concepts-scope.png)
- 此例可以看到擁有scope的Dom會附加`ng-scope`的class
- {{name}}的值基於其繼承的scope
- `ListController`與`GreetController`為兄弟,故`ListController`無法取得`GreetController`彼此內同變數名的值
***
## Retrieving Scopes from the DOM
1. `root scope`產生於`ng-app`的位置
2. 一般而言`ng-app`應置於`<html>`(非定律)
***
## 如何對Scppe進行Debug(Chrome瀏覽器)
1. 檢查元素
2. 透過`$0`存取該元素
3. 於console執行`angular.element($0).scope()`即取得該元素所處scope
4. .scope()能作用前提為`$complieProvider.debugInfoEnable()`為true
***
## 呼叫`Event`
1. 透過`broadcast`傳遞給子Scope(包含自身)
2. 透過`emitted`傳遞給父Scope(包含自身)

釋例:
1. Template
```html
<div ng-controller='EventController'>
    Root scope <tt>MyEvent</tt> count: {{count}}
    <ul>
        <li ng-repeat='i in [1]' ng-controller='EventController'>
            <button ng-click='$emit("MyEvent")'>$emit('MyEvent')</button>
            <button ng-click='$broadcast("MyEvent")'>$broadcast('MyEvent')</button>
            <br>
            Middle scope <tt>MyEvent</tt> count:{{count}}
            <ul>
                <li ng-repeat='item in [1,2]' ng-controller='EventController'>
                    Leaf scope <tt>MyEvent</tt> count:{{count}}
                </li>
            </ul>
        </li>
    </ul>
</div>
```
2. Controller
```js
angular.module('eventExample',[])
.controller('EventController',['$scope',function($scope){
    $scope.count=0;
    $scope.$on('MyEvent',function(){
        $scope.count++;
    });
}])
```
- `$emit('事件名稱')`會觸發自身與父scope中該名稱的事件
- `$broadcasr('事件名稱')`會觸發自身與子scope中該名稱的事件
***
## Scope生命週期
1. 程式碼中呼叫第三方程序(如ajax),並牽涉到AngularJS屬性質的變化,AngularJS並不會收到通知,須透過`$apply`以完成,如此變牽涉到`Scope的生命週期`
2. 只有在`$apply`下執行的數值變換會正確的投射到view上
3. 當評估處理程序後,`$apply`會啟動`$digest`階段,檢查所有`$watch`比對新舊值(非同步)最終投射至view
    1. 舉例而言,`$scope.username='angular'`並不會馬上通知`$watch`,而是:`$apply→$digest→$watch`
    2. 這種延遲是必要的,它能整合多個model的變化進一個$watch,並且保證同時只有一個$watch運作

生命週期：
1. Creation

    `$injector`引導應用程式時,會建立`root scope`,當template連結時,部份的directive會建立子scope
2. Watcher registeration

    template linking時directive會將watch註冊到scope中,這些watch會將model資料投射到view上
3. Model mutation

    為了使model屬性值得變化得以監測,應該將會改變值的程式碼置於`scope.$apply()`之下(AngularJS原生方法皆以隱藏使用,只有當使用第三方工具時需注意)
4. Mutation observation

    當`$apply`結束時,會自root scope啟動`$digest`階段,將所有子scope投射到view上,在`$digest`階段,若有model值的變化,`$watch`會被呼叫
5. Scope destruction

    當子scope不再需要,子scope建立者有責任藉由`scope.$destroy()`毀滅它,這將會停止在`$digest`階段投射scope到view
***
## Scopes and Directives
在編譯時期,compiler會配對directives與Dom Template,通常會有下列2種狀況

1. `Observing` directives(觀察型指令):例如`{{expression}}`,這類directive會使用`$watch`,當model value邊換時會收到通知並投射view
2. `Listener` directive(監聽型指令):例如`ng-click`會將事件監聽註冊到DOM中,事件觸發時會執行scope內定義的事件,並藉由`$apply`投射到view
3. 當外部事件發收並改變model value時,相關程序必須透過`$apply()`觸動所有監聽程序以立即更新view
***
## Directives that create Scopes
在大多數狀況,directive與scope互動,但不創造,然而`ng-controller`與`ng-repeat`則會建立子scope並附加到DOM元素上。

`isolate scope`不會有繼承關係

`.component()`會建立`isolate scope`
***
## Controllers and Scopes
Scope與controller在以下方面互動
1. Controller透過cope