
// set,get,static

class Peple{
    // 一般私有属性的变量名带下划线
    private _name:string = '米斯特吴';
    // 静态属性 static
    static PI:number = 3.14;
    // 静态方法
    static calcCircle(value:number):number{
        return this.PI * value
    }
    // 赋值私有属性
    set setName(value:string){
        this._name = value
    }
    // 取值私有属性
    get getName(){
        return this._name;
    }
}

let people = new Peple()
console.log( people.getName ) // 米斯特吴
people.setName = '泰勒';
console.log( people.getName ) // 泰勒

// 静态调用
console.log( Peple.calcCircle(10))