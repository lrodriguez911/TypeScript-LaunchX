interface UserInfo {
    name: string 
    mail: string
}
//interface can use inside of class

function printUserInfo(info: UserInfo) {
    console.log(info)
    console.log(info.name)
    
}
const mom = {
    name: "Mary",
    mail: "contact@outloock.com",
    favouriteColor: "blue"
}
printUserInfo(mom)