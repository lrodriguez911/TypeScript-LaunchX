//generate numbers randomly between 500 and 1000
const RANDOM_TIME = Math.round(Math.random() * 500) + 500;


let startTime = new Date()
// let endTime: any
//here we allow insert any type of dates to our variable
let endTime

setTimeout(() => {
    endTime = 0
    console.log(endTime);
    endTime = new Date()
    console.log(endTime);
    endTime = "Hello"
    console.log(endTime);
}, RANDOM_TIME)