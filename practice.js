const credits = 0;

if (credits > 0) {
    console.log("Let's play")
} else {
    console.log("Sorry, you have no credits")
}

let currentViewers = null;

currentViewers = ["jane", "nick"]

currentViewers = null;

if (currentViewers) {
    console.log("We have viewers")
}

console.log(  Boolean("")   ) // False
console.log(  Boolean("0")  ) // True
console.log(  Boolean(100)  ) // True
console.log(  Boolean(null) ) // False
console.log(  Boolean([0])  ) // True
console.log(  Boolean(-0)   ) // False

const welcomeEl = document.getElementById("welcome-el");

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, to the show ${name} ${emoji}.`
}

greetUser("Welcome", "Keith","");

function add(num1, num2) {
   total = num1 + num2
   return total;
}

console.log(add(3,4)); // should log out 7
console.log(add(9,102)); //should log out 111

let thisArray = ["mike", "tom", "kelly"]

// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(arr) {
    return arr[0]
}

// Call it with an array as an argument to verify that it works
console.log(getFirst(thisArray));