"use strict";
/*
    联合类型
*/
var unionType = 12;
unionType = '12',
    unionType = false;
/*
    void 表示没有任何类型
    声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
*/
var unusable = undefined;
/*
    undefined null
    默认情况下null和undefined是所有类型的子类型。
    null和undefined赋值给number类型的变量。
    但严格模式下不行。
*/
var u = undefined;
var n = null;
var myNull = 10;
// myNull = null // 严格模式下报错
// myNull = undefined // 严格模式下报错
/*
    类型断言( 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 )
    它没有运行时的影响，只是在编译阶段起作用
*/
var someValue = "this is a string";
var strLength = someValue.length;
var someValue2 = "this is a string";
var strLength2 = someValue.length;
/*
    never类型:永远不返回的函数的返回值类型
    never类型是任何类型的子类型，也可以赋值给任何类型;
    没有类型是never的子类型或可以赋值给never类型（除了never本身之外);
    即使any也不可以赋值给never;
    通常表现为抛出异常或无法执行到终止点（例如无线循环）
*/
// 抛出异常
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("一些东西失败了");
}
// 死循环
function loop() {
    while (true) { }
}
