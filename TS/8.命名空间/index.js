"use strict";
// namespace 命名空间
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function samValue2(num1, num2) {
        return num1 + num2;
    }
    MyMath.samValue2 = samValue2;
    function s(value) {
        return value * PI;
    }
})(MyMath || (MyMath = {}));
// 外部调用export
console.log(MyMath.samValue2(1, 2));
// 多重命名空间
var FMath;
(function (FMath) {
    var SMath;
    (function (SMath) {
        var PI = 3.14;
        function calcCircle(value) {
            return value * PI;
        }
        SMath.calcCircle = calcCircle;
    })(SMath = FMath.SMath || (FMath.SMath = {}));
})(FMath || (FMath = {}));
console.log(FMath.SMath.calcCircle(100));
// 引入文件-三斜杠
// /// <reference path="xxx.js"/>
