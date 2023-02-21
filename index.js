//const appElement = document.getElementById("app")
//appElement.style.backgroundColor = "red"


//setIntervel

function printRockstar() {
    console.log("I am a rockstar");
}

const rockstarld = setInterval(printRockstar, 2000);

clearInterval(rockstarld, printRockstar);

console.log("rockstarId", rockstarld);

//promise

//console.log("hello one")

//setTimeout(function () {
//  console.log('hello two in 2 seconds');
//}, 2000)

//console.log("my name is " + "hello three")

//let promise = new Promise(function (resolve, reject) {
//  alert("hello");
// resolve(45)
//})

//console.log("promise");

let p1 = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(() => {
        console.log("I am a promise and i am a rejected");
        reject(new Error("I am an error"));
    }, 4000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(() => {
        //console.log("I am a promise and i am a fullfilled");
        resolve(true)
    }, 4000)
})

// To get the value
p2.then((value) => {
    console.log(value)
}, (error) => {
    console.log(error);
})

//To catch the error
p1.catch((error) => {
    console.log("some errror occured in p2");
})
//console.log(p1, p2);

let promise = new Promise(resolve => {
    setTimeout(() => resolve("done"), 5000);

});
promise.then(alert);


