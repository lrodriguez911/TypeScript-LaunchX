/* class Animal {
    eat(food) {
        console.log(`eat ${food}`);
        
    }
}

class Dog extends Animal {
    bark() {
        return "Woof!"
    }
}

const doggy = new Dog()


doggy.eat("meat")
console.log(doggy.bark());
 */

interface Animal {
    isAlive: boolean

}
//whit extends CAN use the method in the class
interface Mammal extends Animal {
    getColorHair(hair: string): string
}

interface Dog extends Mammal {
    getSpecie(): string
}

function caressAnimal(dog: Dog) {
    dog.isAlive = true
    dog.getColorHair("browm")
}

// whit implements SHOULD BE use the features of this Super Class
class Cat implements Mammal {
    meow() {
        return "meow"
    }
    isAlive: boolean
    getColorHair(hair: string): string {
        return hair
    }
}