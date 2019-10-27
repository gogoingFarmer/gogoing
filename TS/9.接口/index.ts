
// interface接口

interface PersonA{
    name:string;
    age:number,
    sex?:string; // 如果不想传
    readonly salary:number, // 只读不能修改
    [propName:string]:any, // 任何变量名字
    great():void // great:()=>void
}

let personA:PersonA = {
    name:'米特斯吴',
    age:100,
    salary:7000,
    ids:[1,2,3], // propName
    great(){
        console.log('hello')
    }
}

// 和TYPE的区别
// interface可以继承
// 一般在类中用interface

// implements实现，一个类可以实现多个接口

interface PersonB{
    id:number,
    course:string
}

class OuBa implements PersonA,PersonB{
    name:string ='Yoona';
    age = 500;
    salary:number = 10000;
    id = 101;
    course = "Math";
    great(){
        console.log('gogoing')
    }
}

// 接口继承
interface Employee extends PersonA{
    work:string
}

const employee:Employee = {
    name:'TheshY',
    age:19,
    salary:200,
    great(){
        console.log('First Top')
    },
    work:'player'
}