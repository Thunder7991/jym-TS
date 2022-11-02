//重载

function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}

// 要想实现与入参关联的返回值类型，我们可以使用 TypeScript 提供的函数重载签名（Overload Signature）
function func2(foo: number, bar?: false): number;
function func2(foo: number, bar: true): string;
function func2(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}
const res1 = func2(599); // number
const res2 = func2(599, true); // string
const res3 = func2(599, false); // number
