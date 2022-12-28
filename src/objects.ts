// Jscript
let car = {
    manufactured: "Toyota",
    model: "Prius",
    year: 2022
    
}
let carTS: {
    manufactured: string,
    model: string,
    year: number
}

function getCar(car:{
    manufactured: string,
    model: string,
    year: number,
    color?: string
}) {
    let str = ""
    if(typeof car.color === undefined) str = `${car.manufactured} ${car.model} ${car.year}`
    else str = `${car.manufactured} ${car.model} ${car.year} ${car.color}`
    console.log(str);
    
}
getCar(car)