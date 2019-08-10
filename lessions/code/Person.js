"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    //建構式
    function Person(name) {
        this.name = name;
    }
    Person.prototype.say = function () {
        console.log(this.name);
    };
    return Person;
}());
exports.Person = Person;
;
