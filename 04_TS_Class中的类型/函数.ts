//函数声明
function fooFn(name: string): number {
  return name.length;
}

//函数表达式
const fooExp = function (name: string): number {
  return name.length;
};

//当然我们也可以
const foo: (name: string) => number = function (name) {
  return name.length;
};
//函数类型签名
const fooSign1 = (name: string): number => {
  return name.length;
};
//阅读很差
const fooSign2: (name: string) => number = (name) => {
  return name.length;
};
//因此我们需要
//在函数之后进行参数和返回值的类型声明 (上面fooSign1)
type FuncFoo = (name: string) => number;
interface FuncFooStruct {
    (name: string): number
  }
const fooType = (name) => {
  return name.length;
};
