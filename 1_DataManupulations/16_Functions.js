console.log("Functions Class")

function loginMessage(username){

    if(username === undefined)
        return console.log("Enter a valid user")

    return console.log(`${username} just logged in`)

}

function addNumer(op1, op2){
    return console.log(`sum is ${op1+op2}`);
}

loginMessage("Rajat")
loginMessage()
addNumer(3,4)