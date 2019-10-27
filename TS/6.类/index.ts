// class 类
// protected 被保护，当前类，被继承子类使用
// private 只能当前类使用
// public 公开
class Person{
    public name:string;
    protected gender:string = '男';
    private age:number = 27;

    constructor(name:string,gender:string,public username:string){
        this.name = name;
        this.username = username;
        this.gender = gender
    }

    printAge(age:number){
        this.age = age;
        console.log(this.age)
        this.setGender(this.gender)
    }
    private setGender(gender:string){
        this.gender = gender;
    }
}

const person = new Person('米特斯吴','男','米修');
console.log(person.name,person.username)
//console.log(person.gender) // 报错，gender受保护，不能外部使用

person.printAge(30)
//person.setGender('女') //私有，不可使用

// 子类( 不能使用父类private，其余可继承 ) 
class Student extends Person{
    private studentId:number = 1998;
    constructor(name:string,gender:string,username:string,studentId:number){
        super(name,gender,username) // 调用父类
        // console.log( this.age) // 不能访问
    }
    //在子类写和父类同样的方法可以覆盖
    printAge(val:number){
        this.studentId = val
    }
}

const myStudent = new Student('泰勒','女','无笔名',2088)