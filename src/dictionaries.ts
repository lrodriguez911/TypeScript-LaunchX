const telephones = {
    home: {
        country: "+54",
        area:  "381",
        number: "123456"
    },
    work: {
         country: "+54",
        area:  "381",
        number: "123456"
    }
}

const telTS: {
    [k: string] :{
        country: string,
        area:  string,
        number: string
    }
} = {home: {
    country: "+54",
    area:  "381",
    number: "123456"
},
work: {
     country: "+54",
    area:  "381",
    number: "123456"
},
work1: {
     country: "+54",
    area:  "381",
    number: "123456"
}}

console.log(telTS);
