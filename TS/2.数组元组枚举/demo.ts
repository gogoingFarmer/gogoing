// 数组，元组，枚举

// 1.数组

let names:Array<string> = ['hello','hi'];
//name[0] = 100; // 不能把更改为数字类型
//let numbers:Array<number> = [1,2,3]; // 数字类型数组

// 简写
let strings:string[] = ['good','nice']
let numbers:number[] = []; 
let anyArray:any[] = ['hehe','false',1,true] // 多类型

// 2.元组

let colors:[string,number] = ['hello',1]; // 要对应

// enum 自定义 枚举
enum Colors{
    Black, // 下标从0开始
    Yellow = 100, // 赋值
    Red = 1
}
let myColor:Colors = Colors.Black;