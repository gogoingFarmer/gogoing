class myGreeters{
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }
    greet(){
        return 'hello, ' + this.greeting;
    }
}
let mygreeter = new myGreeters('world');
let mybutton= document.createElement('button');
mybutton.textContent = 'Say Hello';
mybutton.onclick = function(){
    alert(mygreeter.greet())
}
document.body.appendChild(mybutton)

