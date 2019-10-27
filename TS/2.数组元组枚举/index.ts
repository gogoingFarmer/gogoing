// 数组，元组，枚举

// 数组
let names:Array<string> = ['henry','bucky']
// names[0]= 100; // 不能更改类型

let numbers:Array<number> = [1,2,3]
let numbers2:number[] = [1,2,3]
let anyArray:any[] = ['yooNa',1,true]
let anyArray2:Array<any> = [1,false,'Doing']

// 元组
let colors:[string,number] = ['hello',99]

// 枚举enum
enum Color{
    Black,
    Yellow=100,
    Red,
    Orange = 'orange',
}

let myColor:Color = Color.Black;
let myColor2:Color = Color.Yellow;
let myColor3:Color = Color.Red;
console.log(myColor)  // 打印0
console.log(myColor2) // 打印100
console.log(myColor3) // 打印101