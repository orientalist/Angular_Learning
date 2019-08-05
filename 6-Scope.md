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