"use strict";
var myGreeters = /** @class */ (function () {
    function myGreeters(message) {
        this.greeting = message;
    }
    myGreeters.prototype.greet = function () {
        return 'hello, ' + this.greeting;
    };
    return myGreeters;
}());
var mygreeter = new myGreeters('world');
var mybutton = document.createElement('button');
mybutton.textContent = 'Say Hello';
mybutton.onclick = function () {
    alert(mygreeter.greet());
};
document.body.appendChild(mybutton);
