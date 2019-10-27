"use strict";
// 定义返回值
function returnValue() {
    return 'hello';
}
// 空，无返回
function sayHello() {
    console.log('函数无返回值');
}
// 参数返回值
function sumValue(value1, value2) {
    return value1 + value2;
}
console.log(sumValue(1, 2)); // 3
// 函数类型定义 (参数)=>返回
var myFunc;
// myFunc = sayHello;
myFunc = sumValue;
