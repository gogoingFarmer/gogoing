// namespace 命名空间

namespace MyMath{
    const PI = 3.14;
    export function samValue2(num1:number,num2:number):number{
        return num1+num2
    }
    function s(value:number){
        return value * PI
    }      
}

// 外部调用export
console.log(MyMath.samValue2(1,2))


// 多重命名空间

namespace FMath{
   export namespace SMath{
       const PI = 3.14;
       export function calcCircle(value:number){
           return value * PI
       }
   } 
}

console.log( FMath.SMath.calcCircle(100))

// 引入文件-三斜杠
// /// <reference path="xxx.js"/>


