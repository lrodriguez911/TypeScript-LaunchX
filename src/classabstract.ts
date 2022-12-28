//a abstracts class is use like base for others class
//is like a interface but can includes funcionality


abstract class Poligon{
    public abstract getArea(): number;
}

class Rectangle2 extends Poligon {
    public constructor(protected readonly width: number, protected readonly height: number){
        super()
    }

    public getArea(): number {
        return this.width * this.height
    }
}