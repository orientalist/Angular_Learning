# Services
透過DI可以建立跨程式碼使用的Services,特徵如下：
1. `Lazily instantialated`:AngularJS只有當application component相依services時才會建立Service
2. `Singletons`:所有運用到相同的service都參考到同一個由service factory建立的實體
範例如下：
1. Template
```html
<div id='simple' ng-controller='MyController'>
    <p>Let's try this simple notify service,injected into the controller...</p>
    <input ng-init='message="test"' ng-model='message'>
    <button ng-click='callNotify(message);'>NOTIFY</button>
    <p>(you have to click 3 times to see an alert)</p>
</div>
```
2. Controller and Service
```js
angular.module('myServiceModule',[]).
controller('MyController',['$scope','notify',function($scope,nofity){
    $scope.callNotify=function(msg){
        notify(msg)
    };
}]).
factory('notify',['$window',function(win){
    var msgs=[];
    return function(msg){
        msgs.push(msg);
        if(msgs.length===3){
            win.alert(msgs.join('\n'));
            msgs=[];
        }
    }
}])
```
***
## 如何建立Service
1. 透過module註冊Service名稱或方法以建立Service。
2. `service factory function`產生的`singleton object/function`(單一物件/方法)代表該service,並可被注入任何component(controller/service/filter/directive)
### 註冊Services
1. 透過`Module factory API`將service註冊到`modules`內
```js
var myModule=angular.module('myModule',[]);
myModule.factory('serviceId',function(){
    var shinyNewServiceInstance;
    //factory function body that constructs shinyNewServiceInstance
    return shinyNewServiceInstance;
});
```
注意：不是註冊service實體,而是註冊`factory function`以產生service實體
***
## Dependencies
Services各自能擁有Dependency(單一或多個),如同在建立controller時傳入Dependency。
```js
var batchModule=angular.module('batchModule',[]);

batchModule.factory('batchLog',['$interval','$log',function($interval,$log){
    var messageQueue=[];

    function log(){
        if(messageQueue.length){
            $log.log('batchLog message:',messageQueue);
            messageQueue=[];
        }
    }

    $interval(log,50000);

    return function(message){
        messageQueue.push(message);
    }
}])

batchModule.factory('routeTemplateMonitor',['$route','batchLog','$rootScope',
function($route,batchLog,$rootScope){
    return{
        startMonitoring:function(){
            $rootScope.$on('$routeChangeSuccess',function(){
                batchLog($route.current?$route.current.template:null);
            })
        }
    }
}])
```
本案例解說:
1. `batchLog`相依於內建的`$interval`與`$log`
2. `routeTemplateMonitor`相依於內建的`$route`與自訂的`batchLog`
3. 兩者皆使用`陣列`法指明`相依`物件
4. factory function參數與相依陣列名稱順序須一致
***
## 透過`$provide`註冊Services
- 可以透過`$provide`於`module`的`config function`註冊serivce
```js
angular.module('myModule',[]).config(['$provide',function($provide){
    $provide.factory('serviceId',function(){
        var shinyNewServiceInstance;
        //factory function body that constructs shinyNewServiceInstance
        return shinyNewServiceInstance;
    })
}])
```
- Unittest-修改先前Services案例
```js
var mock,notify;
beforeEach(module('myServiceModule'));
beforeEach(function(){
    mock={alert:jasmine.createSpy()};

    module(function($provide){
        $provide.value('$window',mock);
    });

    inject(function($injector){
       notify=$injector.get('notify')
    });
})

it('should not alert first two notifications',function(){
    notify('one');
    notify('two');

    expect(mock.alert).not.toHaveBeenCalled();
})

it('should alert all after third notification',function(){
    notify('one');
    notify('two');
    notify('three');

    expect(mock.alert).toHaveBeenCalledWith('one\two\three');
});

it('should clear messages after alert',function(){
    notify('one');
    notify('two');
    notify('three');
    notify('more');
    notify('two');
    notify('three');

    expert(mock.alert.calls.count()).toEqual(2);
    expert(mock.alert.calls.mostRecent().args).toEqual(['more\ntwo\nthree']);
});
```
***
