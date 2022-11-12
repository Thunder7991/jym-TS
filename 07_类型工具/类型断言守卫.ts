// import assert from 'assert';
// let name: any = 'thunderchen';

// assert(typeof name === 'number');

// console.log();

//断言守卫 和 类型守卫最大的不佟点在与, 在判断条件不通过时, 断言守卫需要抛出一个错误，类型守卫只需要剔除掉预期的类型

function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg);
  }
}

export {};
