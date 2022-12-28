//transform a str to number

let x: string = 'hola'


function greet(greeting: number) {
    console.log(greeting);
    
}
//To force the casting first we are transform to unknown, because this type of data can  transform in anything and then are transform to type that want.
//greet((x as unknown) as number)
//greet(<number>(<unknown>x))
//greet((<unknown> x) as number)

//greet(x as number)