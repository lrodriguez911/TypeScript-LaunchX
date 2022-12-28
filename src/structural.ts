//the definitions in TypeScript area structurals

//this is a definition nominal in JavaScript

/* public class Car {
    String manufactured;
    String model;
    int year;
}

public class CarChecker {
    public static String printCar(Car car){

    }
}

newCar myCar = new Car()
CarChecker.printCar(myCar) */

class Car {
    manufactured: string
    model: string
    year: number
    isElectric: boolean
}

class Trail {
    manufactured: string
    model: string
    year: number
    capacity: number
}

const vehicle = {
    manufactured: "Ford",
    model: "Fiesta",
    year: 2021
}

function printCar(car: {manufactured: string
    model: string
    year: number}) {
    console.log(`${car.manufactured} ${car.model} ${car.year}`);
}

printCar(new Car())
printCar(new Trail())
printCar(vehicle)