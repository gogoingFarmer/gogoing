"use strict";
// interface接口
var personA = {
    name: '米特斯吴',
    age: 100,
    salary: 7000,
    ids: [1, 2, 3],
    great: function () {
        console.log('hello');
    }
};
var OuBa = /** @class */ (function () {
    function OuBa() {
        this.name = 'Yoona';
        this.age = 500;
        this.salary = 10000;
        this.id = 101;
        this.course = "Math";
    }
    OuBa.prototype.great = function () {
        console.log('gogoing');
    };
    return OuBa;
}());
var employee = {
    name: 'TheshY',
    age: 19,
    salary: 200,
    great: function () {
        console.log('First Top');
    },
    work: 'player'
};
