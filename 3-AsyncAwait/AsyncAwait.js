// Asynchronous
function simulateAsynchronous(text, timeout) {
    setTimeout(() => console.log(text), timeout);
}

simulateAsynchronous('A', 1000);
simulateAsynchronous('B', 500);
simulateAsynchronous('C', 100);

// Callback function
function simulateCallback(text, timeout, callback) {
    setTimeout(() => {
        console.log(text)
        if (callback) {
            callback();
        }
    }, timeout);
}

// callback hell
simulateCallback('A', 1000, () => {
    simulateCallback('B', 500, () => {
        simulateCallback('C', 100);
    });
});

// promise
function simulatePromise(text, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text === 'B') return reject('B got rejected');
            console.log(text);
            resolve();
        }, timeout);
    });
}

simulatePromise('A', 1000)
    .then(() => {
        return simulatePromise('B', 500);
    })
    .then(() => {
        return simulatePromise('C', 100);
    })
    // เราจะเรียกใช้ method catch เมื่อเกิด error ขึ้นภายใน function  
    .catch((error) => {
        console.log(error);
    });

// Async Await
function simulateAsyncAwait(text, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if (text === 'B') return reject('B got rejected');
            console.log(text);
            resolve();
        }, timeout);
    });
}

async function run() {
    try {
        await simulateAsyncAwait('A', 1000);
        await simulateAsyncAwait('B', 500);
        await simulateAsyncAwait('C', 100);
    }catch(error) {
        console.log(error);
    }
}

run();