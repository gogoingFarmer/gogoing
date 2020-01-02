

/*
    数组
*/

let names:Array<string> = ['henry','bucky']
let numbers:Array<number> = [1,2,3]
let numbers2:number[] = [1,2,3]
let anyArray:Array<any> = [1,false,'Doing']
let anyArray2:any[] = ['yooNa',1,true]


/*
    元组Tuple
    允许表示一个已知元素数量和类型的数组
*/

let colors:[string,number] = ['hello',99];

/*
    解构（索引命名）
*/

let [,first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 2
console.log(rest); // outputs [ 3, 4 ]

/*
    枚举enum
    ( 可理解为有名字的数组 )
*/

enum Color{
    Black,
    Yellow=100,
    Red,
    Orange = 'orange',
}

let myColor:Color = Color.Black;
let myColor2:Color = Color.Yellow;
let myColor3:Color = Color.Red;
let myColor4:Color = Color.Orange;

console.log(myColor)  // 打印0
console.log(myColor2) // 打印100
console.log(myColor3) // 打印101
console.log(myColor4) // 打印orange
