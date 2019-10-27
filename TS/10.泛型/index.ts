

// 函数中 明确指定类型,

function identify<T>(arg:T):T{
    return arg;
}
console.log( identify<string>('string') ) // 指定传入str类型

function identifyA<T extends number>(arg:T):T{
    return arg;
}
console.log( identifyA(100) )

// 交给TS推断
console.log( identify(20) )

// 接口中
interface GenericIdentify<>{
    <T>(arg:T):T;
}

function identify2<T>(arg:T):T{
    return arg;
}

let myIdent:GenericIdentify = identify2;
console.log(myIdent<string>("Go Go Go")) // 明确指定
console.log(myIdent(30)) // 明确指定

// 定义提升
interface GenericIdentify2<T>{
    (arg:T):T;
}

let myIdent2:GenericIdentify2<string | boolean> = identify2; // 需要指定明确类型
console.log( myIdent2('TO TO TO') )
//console.log( myIdent2(100) ) //错误，已经指定类型

// 约束,extends必须带有的属性

function getLen<T extends {length:number}> (obj:T):number{
    return obj.length
}

const obj = {
    name:'YOONA',
    age:30,
    length:100
}

console.log( getLen(obj) )


// 在类中使用
class ContNumber<T extends number | string>{
    number1:T;
    number2:T;
    constructor(num1:T,num2:T){
        this.number1 = num1;
        this.number2 = num2
    }
    calcalate():number{ // +识别计算
        return +this.number1 * +this.number2
    }
}

const countNumber = new ContNumber<string>('10','20')