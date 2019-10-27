"use strict";
// 函数中 明确指定类型,
function identify(arg) {
    return arg;
}
console.log(identify('string')); // 指定传入str类型
function identifyA(arg) {
    return arg;
}
console.log(identifyA(100));
// 交给TS推断
console.log(identify(20));
function identify2(arg) {
    return arg;
}
var myIdent = identify2;
console.log(myIdent("Go Go Go")); // 明确指定
console.log(myIdent(30)); // 明确指定
var myIdent2 = identify2; // 需要指定明确类型
console.log(myIdent2('TO TO TO'));
//console.log( myIdent2(100) ) //错误，已经指定类型
// 约束,extends必须带有的属性
function getLen(obj) {
    return obj.length;
}
var obj = {
    name: 'YOONA',
    age: 30,
    length: 100
};
console.log(getLen(obj));
// 在类中使用
var ContNumber = /** @class */ (function () {
    function ContNumber(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;
    }
    ContNumber.prototype.calcalate = function () {
        return +this.number1 * +this.number2;
    };
    return ContNumber;
}());
var countNumber = new ContNumber('10', '20');
