"use strict";
// 数组，元组，枚举
// 1.数组
var names = ['hello', 'hi'];
//name[0] = 100; // 不能把更改为数字类型
//let numbers:Array<number> = [1,2,3]; // 数字类型数组
// 简写
var strings = ['good', 'nice'];
var numbers = [];
var anyArray = ['hehe', 'false', 1, true]; // 多类型
// 2.元组
var colors = ['hello', 1]; // 要对应
// enum 自定义 枚举
var Colors;
(function (Colors) {
    Colors[Colors["Black"] = 0] = "Black";
    Colors[Colors["Yellow"] = 100] = "Yellow";
    Colors[Colors["Red"] = 1] = "Red";
})(Colors || (Colors = {}));
var myColor = Colors.Black;
