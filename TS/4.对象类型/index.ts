
// 对象
let dataObj:{name:string,age:number} = {
    name:"Henry",
    age:31
}
//dataObj = {} // 错误，无属性


// 复杂对象
let complex:{ 
    data:number[],
    myfunc:(item:number) => number[] 
} = {
    data:[1,2,3],
    myfunc:function(item:number):number[]{
        this.data.push(item);
        return this.data
    }
}

// 形式，type生成类型
type myType = {
    data:number[],
    myfunc:(item:number) => number[],
}

let complex2:myType = {
    data:[1,2,3],
    myfunc:function(item:number):number[]{
        this.data.push(item);
        return this.data
    }
}
