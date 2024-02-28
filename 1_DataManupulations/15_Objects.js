console.log("Objects in JavaScript")

const tinderApp = {
    displayName: "Rajat",
    age: 18,
    gender: "Male"
}

const loginUser = {
    user: tinderApp.displayName,
    isLoggedIn: true,
    fullName: {
        first: "Rajat",
        last: "Sinha"
    }
}

console.log(tinderApp)
console.log(loginUser.fullName)
console.log(`Hello my name is ${tinderApp.displayName}. I am ${tinderApp.age} year old and i am an Alpha${tinderApp.gender}. 
My Full name is pronounced as ${loginUser.fullName.first} ${loginUser.fullName.last}`)