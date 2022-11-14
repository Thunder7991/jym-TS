function p() {
  return new Promise<boolean>((resolve, reject) => {
    resolve(true);
  });
}

arr.reduce<number[]>((prev, curr, idx, arr) => {
    return prev;
  }, []);