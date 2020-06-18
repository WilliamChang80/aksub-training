//Promise, callback, async await

const promiseFunction = new Promise((resolve, reject) => {
  resolve(1);
  reject("Failed");
});

//high order function
//callback
promiseFunction
  .then((res) => res + 1)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

//callback hell
const callbackHell = () => {
  setTimeout(() => {
    console.log("Function 1 success");
    setTimeout(() => {
      console.log("Function 2 success");
      setTimeout(() => {
        console.log("Function 3 success");
        setTimeout(() => {
          console.log("Function 4 success");
          setTimeout(() => {
            console.log("Function 5 success");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
callbackHell();
