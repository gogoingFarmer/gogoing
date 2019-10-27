"use strict";
// union type 
var unionType = 12;
unionType = '12',
    unionType = false;
// 检查类型
var checkType = 10;
if (typeof checkType == "number") {
    console.log("number");
}
// null undefined
var myNull = 12;
//myNull = null // 严格模式下报错
//myNull = undefined // 严格模式下报错
// never类型
// never  never类型是任何类型的子类型，也可以赋值给任何类型；然而，
// 没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 
// 即使 any也不可以赋值给never。通常表现为抛出异常或无法执行到终止点（例如无线循环）
var x;
//x = 123 // 不能将其他类型转为never类型
// 1、抛出异常
function error(message) {
    throw new Error(message);
}
// 2、死循环
function loop() {
    while (true) {
    }
}
