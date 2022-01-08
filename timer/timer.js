let startTime = Date.now();
console.log(startTime);

let timer = setInterval(() => {
    console.log("Hello there!");
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 10000);
