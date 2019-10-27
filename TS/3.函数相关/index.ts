
// 定义返回值
function returnValue():string{
    return 'hello'
}

// 空，无返回
function sayHello():void{
    console.log('函数无返回值')
}

// 参数返回值
function sumValue(value1:number,value2:number):number{
    return value1 + value2
}
console.log( sumValue(1,2) ) // 3

// 函数类型定义 (参数)=>返回
let myFunc:(a:number,b:number) => number;
// myFunc = sayHello;
myFunc = sumValue;