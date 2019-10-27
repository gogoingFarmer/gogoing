"use strict";
// set,get,static
var Peple = /** @class */ (function () {
    function Peple() {
        // 一般私有属性的变量名带下划线
        this._name = '米斯特吴';
    }
    // 静态方法
    Peple.calcCircle = function (value) {
        return this.PI * value;
    };
    Object.defineProperty(Peple.prototype, "setName", {
        // 赋值私有属性
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Peple.prototype, "getName", {
        // 取值私有属性
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    // 静态属性 static
    Peple.PI = 3.14;
    return Peple;
}());
var people = new Peple();
console.log(people.getName); // 米斯特吴
people.setName = '泰勒';
console.log(people.getName); // 泰勒
// 静态调用
console.log(Peple.calcCircle(10));
