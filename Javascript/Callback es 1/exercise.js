

function printAsyncName (callback, name) {
setTimeout(callback(()=> console.log("hello")),1000)
setTimeout(()=> console.log(name),2000)
} 
/* let hello = (()=> console.log("hello")) */
printAsyncName( callback, "yari")