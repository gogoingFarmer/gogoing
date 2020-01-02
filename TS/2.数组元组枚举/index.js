"use strict";
/*
    数组
*/
var names = ['henry', 'bucky'];
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
var anyArray = [1, false, 'Doing'];
var anyArray2 = ['yooNa', 1, true];
/*
    元组Tuple
    允许表示一个已知元素数量和类型的数组
*/
var colors = ['hello', 99];
/*
    解构（索引命名）
*/
var _a = [1, 2, 3, 4], first = _a[1], rest = _a.slice(2);
console.log(first); // outputs 2
console.log(rest); // outputs [ 3, 4 ]
/*
    枚举enum
    ( 可理解为有名字的数组 )
*/
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
var myColor4 = Color.Orange;
console.log(myColor); // 打印0
console.log(myColor2); // 打印100
console.log(myColor3); // 打印101
console.log(myColor4); // 打印orange
