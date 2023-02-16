let count = 5000;
let userName: string = "Alex";

var flat = require('array.prototype.flat');

console.log([1, [2, 3]].flat());

function setUserName(name: string){
    console.log(name);
}

setUserName("Alex");