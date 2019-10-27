"use strict";
// 对象
var dataObj = {
    name: "Henry",
    age: 31
};
//dataObj = {} // 错误，无属性
// 复杂对象
var complex = {
    data: [1, 2, 3],
    myfunc: function (item) {
        this.data.push(item);
        return this.data;
    }
};
var complex2 = {
    data: [1, 2, 3],
    myfunc: function (item) {
        this.data.push(item);
        return this.data;
    }
};
