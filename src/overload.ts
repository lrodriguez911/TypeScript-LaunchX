interface Figure {
    getArea: () => number
}


class Rectangle implements Figure {
    
    //proctected
    public constructor(protected readonly width: number, protected readonly height: number){}

    public getArea(): number {
        return this.width * this.height
    }

    public toString(): string {
        return `Reactangle whit width of ${this.width} and height of ${this.height}`
    }
}

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width)
    }

    public override toString(): string {
        return `Square whit sides of :${this.width}`
    }
}

let square = new Square(5)
console.log(square.toString())
 