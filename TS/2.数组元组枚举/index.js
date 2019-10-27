"use strict";
// 数组，元组，枚举
// 数组
var names = ['henry', 'bucky'];
// names[0]= 100; // 不能更改类型
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
var anyArray = ['yooNa', 1, true];
var anyArray2 = [1, false, 'Doing'];
// 元组
var colors = ['hello', 99];
// 枚举enum
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Yellow"] = 100] = "Yellow";
    Color[Color["Red"] = 101] = "Red";
    Color["Orange"] = "orange";
})(Color || (Color = {}));
var myColor = Color.Black;
var myColor2 = Color.Yellow;
var myColor3 = Color.Red;
console.log(myColor); // 打印0
console.log(myColor2); // 打印100
console.log(myColor3); // 打印101
