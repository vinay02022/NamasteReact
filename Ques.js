// Create a function delayedMessage that takes a message and a delay in milliseconds as arguments. The function should log the message after the specified delay. Message - "Hello, this is a delayed message!"
// Delay = “2 ms”
function delayedMessage(msg,ms){
    setTimeout(()=>{
        console.log(msg);
    },2000)
}
delayedMessage("helo",2000)