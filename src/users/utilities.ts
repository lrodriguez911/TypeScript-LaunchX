import { UserContactInfo } from "./types";


function printContactInfo(info:UserContactInfo) {
    console.log(info);
    console.log(info.mail);
}

const mom = {
    name: "Mary",
    mail: "contact@outloock.com",
    favouriteColor: "blue"
}

printContactInfo(mom)