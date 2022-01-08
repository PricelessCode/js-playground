// async & await
// clear style of using promise :)

// 1. async --> Adding async will automatically help function return promises instead of having to write 'return new Promises()'
// Promise version
function fetchUser() {
    return new Promise((resolve, reject) => {
        resolve("ellie");
    });
}

// Async version
async function fetchUser() {
    // do network reqeust in 10 secs....
    return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//////////////////////////////////////

// 2. await ✨
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Promise version
function getBanana() {
    return delay(1000).then(() => "🍌");
}

// await version
async function getApple() {
    await delay(1000);
    return "🍎";
}

async function getBanana() {
    await delay(1000);
    return "🍌";
}

///////////////////////////////////

//pickFruits() that takes each second to retrieve each fruit
function pickFruits() {
    return getApple().then((apple) => {
        return getBanana().then((banana) => `${apple} + ${banana}`);
    });
}

// Get both done in 1 sec (parallel mode)
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs from promises ✨
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then((fruits) =>
        fruits.join(" + ")
    );
}
pickAllFruits().then(console.log);

// Pick one that is finished faster
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
