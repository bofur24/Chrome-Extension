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