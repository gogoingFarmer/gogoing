"use strict";
// 基本数据类型
var num = 25;
var flo = 25.5;
var hex = 0xf000;
var binary = 9; //二级制
var octal = 475; // 八进制
// 重新赋值
//num = ""; // 不能改变类型，问题中已提示
//let num = 30 // 只能定义一次
num = 25.5; // 类型不变，可改变；
// ts原型写法
var num2 = 25;
// boolean
var isLogin = false;
var isBoy = true;
// 更改
//isLogin = 1; // 1虽然为真，但是类型不能改变
// string
var str = "hello world";
// 不确定类型，可以储存所有类型
var anything; // let anyhing:any
anything = 25;
anything = 'hello';
