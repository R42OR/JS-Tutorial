console.log("Summary: ")
const bigNumber = 3453535578676457n
console.log(typeof bigNumber);

const myFunction = function(){
    console.log(bigNumber)
}

console.log(typeof myFunction);

const animals = ["dog", "cat", "lion"]

const myDict = {
    Flare: "False",
    Throttle: "TOGA",
    Yoke: "First Officer"
}

console.log(typeof animals)
console.log(typeof myDict)
console.table([typeof bigNumber, typeof myFunction, typeof animals, typeof myDict])