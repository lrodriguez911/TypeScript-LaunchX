// we are telling to TS that can send a number or  a boolean
function printStatusCode(code:number | string) {
    console.log(`my status code is ${code}`);
    
}

printStatusCode(404)
printStatusCode('404')