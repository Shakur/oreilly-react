//1. DECLARING VARIABLES - const, let
//2. TEMPLATE STRINGS - `${variable}`
//3. DEFAULT PARAMETERS
//4. ARROW FUNCTIONS
//5. DESTRUCTURING ASSIGNMENT
let sandwich =  {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
}

let {bread, meat} = sandwich;

//6. OBJECT LITERAL ENHANCEMENT
var name = "Tallac"
var elevation = 9738

var funHike = {name,elevation}

//7. THE SPREAD OPERATOR
var peaks = ["Tallac", "Ralston", "Rose"]
var canyons = ["Ward", "Blackwood"]
var tahoe = [...peaks, ...canyons] // merge arrays

//8. PROMISES
//9. CLASSES
//10. MODULES