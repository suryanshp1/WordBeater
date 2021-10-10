// console.log("Hello World", 4 + 6, "Another log")
//     // alert("me")
//     // document.write("This is document write")
// console.error("This is an error")
// console.warn("This is an warning")

//Javascript variables
// Containers to store data values
/* 
Multi
line comment
*/
var number1 = 34;
var number2 = 36;
// console.log(number1 + number2)

// Datatypes in JS:
// Numbers
var num1 = 455;
var num2 = 34.56;

// String
var str1 = "This is a string";
var str2 = 'This is also a string';

// Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}

// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

var und = undefined;
var und;
// console.log(und)

var n = null;
// console.log(n)

/*
// Arrays: Colection of elements
At a very high level there are two types of datatype in JS:
1. Primitive data types : undefined, null, number, string, boolean, symbol
2. Reference data types : arrays, objects
*/

var arr = [1, 2, 3, 4, "bablu"]

// Operaters:
// Arrithmatic opeators
var a = 34;
var b = 24;
// console.log("The value osf a+b is", a + b); //+,-,/,*

// Assignment operators:
var c = b;
c += 2;
c -= 2;
c /= 2;
c *= 2;
// console.log(c);
// Comparision operato:
// var x = 34;
// var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical operators:
// Logical and:
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// Logical or:
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// Logical not:
// console.log(!true);
// console.log(!false);

// Functions in JS
// DRY: Do Not Repeaat youself
function avg(a, b) {
    return (a + b) / 2;
}
c = avg(4, 6);
// console.log(c);

// Conditionals in JS

var age = 24;
// Single if statement
// if (age > 18) {
//     console.log("you can drink");
// }
// if - else statement
// if (age > 18) {
//     console.log("you can drink");
// } else {
//     console.log("you can not drink water");
// }

// if -else laddwer
// if (age > 32) {
//     console.log("You are not a kid");
// } else if (age > 26) {
//     console.log("Bacche nhi rhe");
// } else if (age > 22) {
//     console.log("Yes Bacche nhi rhe");
// } else if (age > 18) {
//     console.log("18 Bacche nhi rhe");
// } else {
//     console.log("Bacche rhe");
// }
// console.log("End of Ladder");

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2)
//         break;
//     console.log(arr[i]);
// }

// arr.forEach(function(elements) {
//     console.log(elements)
// })
let j = 0;
// const ac = 12;
// ac++;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length)
let myarr = ["Fan", "Camera", 34, null, true];
// console.log(myarr.length, myarr)
// myarr.pop()
// myarr.push("harry")
// myarr.shift()
// console.log(myarr.unshift("Harry"))
const newLen = myarr.unshift("Harry");
// console.log(newLen)
// console.log(myarr.length, myarr)

// String methods in javascript
let myLovelyString = "Harry is a good boy good good";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(0, 4))
d = myLovelyString.replace("Harry", "Suraj")
    // d = d.replace("good", "Bad")
    // console.log(d, myLovelyString)

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// Dom maniplation
let elem = document.getElementById('click');
// console.log(elem)

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass)
// elemClass[0].style.background = "yellow"
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
    // console.log(elem.innerHTML)
    // console.log(elem.innerText)
    // console.log(elemClass[0].innerHTML)
    // console.log(elemClass[0].innerText)

tn = document.getElementsByTagName('div')
    // console.log(tn)
createdElement = document.createElement('p')
createdElement.innerText = "This is a created para"
tn[0].appendChild(createdElement)

createdElement2 = document.createElement('b')
createdElement2.innerText = "This is a created bold"
tn[0].appendChild(createdElement2)
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element) -----> removes an element

// selecting query
sel = document.querySelector('.container')
    // console.log(sel)
sel = document.querySelectorAll('.container')
    // console.log(sel)

// Events

// function clicked() {
//     console.log("The button was clicked")
// }

// window.onload = function() {
//     console.log("The document was loaded/")
// }

// firstContainer.addEventListener('click', function() {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("Clicked on container");
// })

// firstContainer.addEventListener('mouseover', function() {
//     console.log("hover on container");
// })

// firstContainer.addEventListener('mouseout', function() {
//     console.log("mouse out of container");
// })

// firstContainer.addEventListener('mouseup', function() {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("mouse up clicked on container");
// })

// firstContainer.addEventListener('mousedown', function() {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("mouse down clicked on container");
// })

// Arrow Function

// function summ(a, b) {
//     return a + b;
// }


// summ = (a, b) => {
//     return a + b;
// }

// console.log(summ(2, 3))

// setTimeout and setinterval

logKaro = () => {
    console.log("I am your log");
}

// clr = setTimeout(logKaro, 5000)
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
// clr = setInterval(logKaro, 2000);

// JavaScript Local Storage
// localStorage.setItem('name', 'harry')
// localStorage
// localStorage.clear()
// localStorage.getItem('name')
// localStorage.removeItem('name')

// JSON

obj = { name: "Harry", length: 1, a: { this: "tha \\\"t" } }
jso = JSON.stringify(obj)
console.log(jso, typeof jso)
parsed = JSON.parse(`{"name":"Harry","length":1,"a":{"this":"that"}}`)
console.log(parsed)