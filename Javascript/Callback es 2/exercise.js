function repeatHello (callback){
setInterval(callback,1000) 
}
 
const print  = (()=> {
    console.log("hello")
})

repeatHello(print)

