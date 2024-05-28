let user = "vaibhav"

console.log(user)

const circumference = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circumference(134))

let array = ["vaibhav", "hello", 3]

array.push(2)

array.forEach(x => console.log(x))

let userInfo = {
    name: "vaibhav",
    age: 21,
    class: "pass out"
}

console.log(userInfo.age)

// userInfo = ""


let newArr: (string|number|boolean)[] = []

newArr.push(21)
newArr.push("vaibhav")
newArr.push(true)

userInfo = {
    name: "vishal",
    class: "job",
    age: 23,
}
console.log(userInfo.age)

let userInfo2: object;
userInfo2 = {
    name: "vaibhav",
    age: 21
}

let userInfo3: {
    name: string,
    age: number,
    class: string
}
userInfo3 = {
    name: "vaibhav",
    age: 21,
    class: "pass out"
}

