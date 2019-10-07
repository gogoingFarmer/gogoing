// 函数的相关类型

// 1.规定return类型
function returnValue():string{
    return "hello"
}
console.log(returnValue())
// 2.空，void定义此函数没有任何返回值，返回空
function sayHello():void{
    console.log('hello ^_^')
}

// 3.参数返回值
function sumValue(val1:number,val2:number):number{
    return val1 + val2;
}
console.log(sumValue(1,2))

// 4.函数类型
let myFunc:(a:number,b:number) => number // =>规定返回值类型
myFunc = sumValue;
console.log(myFunc(5,5))