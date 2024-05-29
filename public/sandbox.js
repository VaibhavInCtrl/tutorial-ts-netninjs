"use strict";
let user = "vaibhav";
console.log(user);
const circumference = (diameter) => {
    return diameter * Math.PI;
};
console.log(circumference(134));
let array = ["vaibhav", "hello", 3];
array.push(2);
array.forEach(x => console.log(x));
let userInfo = {
    name: "vaibhav",
    age: 21,
    class: "pass out"
};
console.log(userInfo.age);
// userInfo = ""
let newArr = [];
newArr.push(21);
newArr.push("vaibhav");
newArr.push(true);
userInfo = {
    name: "vishal",
    class: "job",
    age: 23,
};
console.log(userInfo.age);
let userInfo2;
userInfo2 = {
    name: "vaibhav",
    age: 21
};
let userInfo3;
userInfo3 = {
    name: "vaibhav",
    age: 21,
    class: "pass out"
};
console.log("new ts done");
const greet = (user) => {
    console.log(user);
};
greet({ name: "vaibhav", uid: "123" });
let calcVariable;
calcVariable = (num1, num2, c = "add") => {
    if (c === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
console.log(calcVariable(2, 3, "substract"));
