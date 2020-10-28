# javaScript

## Concept javaScript

หลักการทำงานของภาษา javaScript เป็นหลักการทำงานแบบ Asynchronous ซึ่งเป็นการทำงานที่ไม่ต้องรอให้คำสั่งแรกทำงานเสร็จก่อน แล้วคำสั่งลำดับถัดไปคค่อยทำงาน แต่ว่าคำสั่งในลำดับตัดไปสามารถทำงานได้เลย โดยที่ไม่ต้องรอให้คำสั่งก่อนหน้าเสร็จ

Code ที่ถูกเรียกใช้งานก่อนอาจจะเสร็จทีหลังก็ได้

## รูปแบบการทำงานของภาษา javaScript

1. Asynchronous
2. Callback function
3. Promise
4. Async / Await

- function setTimeout เป็นการทำงานแบบ Asynchronous

## Asynchronous

```js
// Asynchronous
function simulateAsyncAPI(text, timeout) {
  setTimeout(() => console.log(text), timeout);
}

simulateAsyncAPI("A", 1000);
simulateAsyncAPI("B", 500);
simulateAsyncAPI("C", 100);

// output
C;
B;
A;
```

## Callback function

```js
// Callback function
function simulateCallback(text, timeout, callback) {
  setTimeout(() => {
    console.log(text);
    if (callback) {
      callback();
    }
  }, timeout);
}

// callback hell
simulateCallback("A", 1000, () => {
  simulateCallback("B", 500, () => {
    simulateCallback("C", 100);
  });
});
```

## Promise

```js
// promise
function simulatePromise(text, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (text === "B") return reject("B got rejected");
      console.log(text);
      resolve();
    }, timeout);
  });
}

simulatePromise("A", 1000)
  .then(() => {
    return simulatePromise("B", 500);
  })
  .then(() => {
    return simulatePromise("C", 100);
  })
  // เราจะเรียกใช้ method catch เมื่อเกิด error ขึ้นภายใน function
  .catch((error) => {
    console.log(error);
  });
```

## Async Await

```js
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
    await simulateAsyncAwait("A", 1000);
    await simulateAsyncAwait("B", 500);
    await simulateAsyncAwait("C", 100);
  } catch (error) {
    console.log(error);
  }
}

run();
```
