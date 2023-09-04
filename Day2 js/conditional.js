// var isRaining=true
// if(isRaining){
//     alert("take your umbrella")
// }

// var age =parseInt(prompt("Enter your age"))
// if (age<18){
//     alert("Your are a child")
// }else{
//     alert("You may proceed")
// }

// var age = parseInt(prompt("Enter your age"))
// if (age < 18) {
//   alert("You are acchild");
// } else if (age > 18 && age <60) {
//   alert("Your are above 18");
// } else {
//   alert("You are betn 18 and 60");
// }

//Switch statement
// var fruit = prompt("Enter a fruit: ");
// switch (fruit) {
//   case "apple":
//     alert("You select apple");
//     break;
//   case "banana":
//     alert("You selected banana");
//     break;
//   default:
//     alert("You selected something else than apple or banana");
// }

//Loops
//  for (let i=0;i<10;i++){
//     console.log(i)
//  }

// const names=["alice","bob","ram"]
// for (let i=0;i<names.length;i++){
//     const name=names[i]
//     alert("Hello, " + `${name}`)
// }

//  const word="Hello"
//  for ( let i=0;i<word.length;i++){
//     alert(word[i])
//  }

//While:
//  let i=1
//  while(i<=5){
//     console.log(i)
//     i++
//  }

// let i=1;
// do{
//     console.log(i)

// }while(i<=5)

//Functions:
// var global="This is global"
// function dem(){
//     var local="This is local"
//     console.log("Global",global)
//     console.log("Local",local)

// }
// dem()
// console.log("global",global)
// console.log("local",local)

// function sum(a,b){
//     let add =a+b
//    return a+b
// }

// sum(10,10)
// sum(2,3)
// console.log(sum(10,10))

// function greet(){
//     console.log("Hello world")

// }
// greet();

// function fun(name ){
//     console.log("Hello "+name +":")
// }
// let name =prompt("Enter the name :",)

// function fun(name2 ){
//     console.log("Hello "+name2 +":")
// }
// var name2 =prompt("Enter the name :",)

// function add(a,b){
//     console.log(a+b)

// }
// add(3,5)
// add(3,15)

// function add(a,b){
//     return a+b

// }
// let num1=parseFloat(prompt("Enter the 1st number"))
// let num2=parseFloat(prompt("Enter the 2nd number"))

// let result = add(num1,num2)
// alert(`The sum is :${result}`)

// let x= function(num){
//     return num*num
// }
// console.log(x(4));

// let y = x(3);
// console.log(y);

// function greet(name,callback){
//     console.log("Hello"+ name)
//     callback()

// }
// function bye(){
//     console.log("Bye Bye")

// }
// greet("Hari",bye)
//Javascript Hoisting
// function Hoisting(){
//     y=20
//     console.log(y)
//     var y
//     console.log(y)

// }
// Hoisting()

// function out(){
//     var x=5;
//      console.log(x)
//      function inn(y){
//         console.log("This is inner function")
//         console.log("Sum is :",x+y)

//      }
//      inn(10);

// }
// out();
