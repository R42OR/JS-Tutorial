// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let myDate = new Date()
let dayList = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
console.log(`Today is : ${dayList[myDate.getDay()]}
            Current time is ${myDate.getHours()} : ${myDate.getMinutes()} : ${myDate.getSeconds()}`)

//4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

let sides = [5,6,7]
let areaOfTriange = sides[0]*sides[1]*sides[2]
console.log(areaOfTriange)