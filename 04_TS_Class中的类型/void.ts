function foo(): void {}
function bar(): void {
  return;
}

// 在 TypeScript 中，undefined 类型是一个实际的、有意义的类型值，而 void 才代表着空的、没有意义的类型值
// 进行了返回操作，但没有返回实际的值
function barVoid(): undefined {
  return;
}

//可选参数 与 rest参数
function foo1(name: string, age?: number): number {
  const inputAge = age || 18; // 或使用 age ?? 18
  return name.length + inputAge;
}

//参数默认值
function foo2(name: string, age: number = 18): number {
  const inputAge = age;
  return name.length + inputAge;
}
//需要注意的是可选参数必须位于选参数之后

function foo3(name: string, age: number = 18): number {
  const inputAge = age || 18;
  return name.length + inputAge;
}

function foo4(argue: string, ...rest: [number, boolean]) {}
foo4("thunder",18,true)

export {};
