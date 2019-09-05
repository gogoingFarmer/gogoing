// 基本数据类型
let num = 25;
let flo = 25.5;
let hex = 0xf000;
let binary = 0b1001;//二级制
let octal = 0o733;// 八进制

// 重新赋值
//num = ""; // 不能改变类型，问题中已提示
//let num = 30 // 只能定义一次
num = 25.5; // 类型不变，可改变；

// ts原型写法
let num2:number = 25;

// boolean
let isLogin = false;
let isBoy:boolean = true;

// 更改
//isLogin = 1; // 1虽然为真，但是类型不能改变

// string
let str:string = "hello world";

// 不确定类型，可以储存所有类型
let anything; // let anyhing:any
anything = 25;
anything = 'hello';