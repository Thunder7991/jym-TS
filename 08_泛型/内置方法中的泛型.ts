function p() {
  return new Promise<boolean>((resolve, reject) => {
    resolve(true);
  });
}

arr.reduce<number[]>((prev, curr, idx, arr) => {
  return prev;
}, []);


function p() {
    return new Promise<boolean>((resolve,reject) => {
      resolve(true)
    })
}

interface PromiseConstructor {
  resolve<T>(value: T | PromiseLike<T>): Promise<T>;
}

declare var Promise: PromiseConstructor;




