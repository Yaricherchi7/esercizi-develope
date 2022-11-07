
function printName () {
    let helloName= "hello John"
    function inner () {
        setTimeout(function(){
            console.log(helloName)
        }, 1000)
        return helloName
     }return inner
}

(printName()())






// # Exercise Closures

// Starting from the previous exercise,
//  are you able to print the value of `helloName`, after 1 second?

// Tips:

// - The method that you need to solve the exercise is: `setTimeout`
// - You can learn more about the topic checking 
// this article: https://www.freecodecamp.org/news/closures-in-javascript/