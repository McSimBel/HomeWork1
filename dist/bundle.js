(()=>{"use strict";let e=[{userid:"127e4567-e89b-12d3-a458-426614174000",name:"John",birthdate:"1982-02-17T21:00:00.000Z",age:40,organization:{name:"Amazon",position:"General manager"}},{userid:"127e4567-e89a-12f3-a458-327395154000",name:"Anna",birthdate:"1988-02-17T21:00:00.000Z",age:34,organization:{name:"Amazon",position:"Manager"}}];const n=function(n){let a=[];return[{userid:"127e4567-e89b-12d3-a458-426614174000",name:"John",gender:"man"},{userid:"127e4567-e89a-12f3-a458-327395154000",name:"Anna",gender:"woman"}].forEach((function(n,o){let i={name:n.name,position:e[o].organization.position,age:e[o].age,gender:n.gender};a.unshift(i)})),a}();console.log("userPositions",n)})();