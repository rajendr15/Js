// #Primitive 
//7 types : String,Number,Boolean , null ,undefind, Symbol ,BigInt
const score =100
let outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)
const bigNumber = 12345671234562345n

// REference (Non Perimitive)


// Array, Objects,Functions 
const heros = ["shaktiman", "naagraj","doga"];

let myObj = {
    name: "rajendra",
    age: 22,
}

const myFunction = function(){
      console.log("Hello world");
}

// ######################################################################
// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "this is rajendra"
let anothername =myYoutubename
anothername="hiii"
console.log(anothername)
console.log(anothername)

let userOne = {
    use :"rajone",
    password : "123"
} 
 let userTwo = userOne
 userTwo.use = "123@gmail.com"
 console.log(userOne)