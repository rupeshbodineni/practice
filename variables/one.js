name="rupesh";
console.log(name)
//variables names are case sensitive 
//only letters,digits,underscore(_) and $ is allowed
//only a ByteLengthQueuingStrategy,underscore(_) or $ should be 1st chartacter
//reserved keyword cannot be variable names like console
//example:fullname,_fullname,$fullname,
//not allowed:123fullname

let fullname="rahul"
console.log(fullname)

//var:variable can be redeclared &updated .A global scope variable
//let:variable cannot be redeclared but can be updated .A block scope variable
//const:variable cannot be redeclared or updated .A block scope variable

var age=29;
var age=50;
var age=40;
console.log(age)


let salary=50000;
salary=4000;
console.log(salary)

const PI=30;
console.log(PI)