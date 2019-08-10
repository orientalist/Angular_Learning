var Person_Model = /** @class */ (function () {
    //建構式
    function Person_Model(name) {
        this.name = name;
    }
    Person_Model.prototype.say = function () {
        console.log(this.name);
    };
    return Person_Model;
}());
;
var person = new Person_Model('Zhuang');
person.say();
