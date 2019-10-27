"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class 类
// protected 被保护，当前类，被继承子类使用
// private 只能当前类使用
// public 公开
var Person = /** @class */ (function () {
    function Person(name, gender, username) {
        this.username = username;
        this.gender = '男';
        this.age = 27;
        this.name = name;
        this.username = username;
        this.gender = gender;
    }
    Person.prototype.printAge = function (age) {
        this.age = age;
        console.log(this.age);
        this.setGender(this.gender);
    };
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    return Person;
}());
var person = new Person('米特斯吴', '男', '米修');
console.log(person.name, person.username);
//console.log(person.gender) // 报错，gender受保护，不能外部使用
person.printAge(30);
//person.setGender('女') //私有，不可使用
// 子类( 不能使用父类private，其余可继承 ) 
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, gender, username, studentId) {
        var _this = _super.call(this, name, gender, username) // 调用父类
         || this;
        _this.studentId = 1998;
        return _this;
        // console.log( this.age) // 不能访问
    }
    //在子类写和父类同样的方法可以覆盖
    Student.prototype.printAge = function (val) {
        this.studentId = val;
    };
    return Student;
}(Person));
var myStudent = new Student('泰勒', '女', '无笔名', 2088);
