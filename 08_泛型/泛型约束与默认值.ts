type Factory<T = boolean> = T | number | string;

const foo: Factory = false;

function Factory(typeArg = boolean) {
  return [typeArg, number, string];
}

type ResStatus<ResCode extends number> = ResCode extends 10000 | 10001 | 10002
  ? 'success'
  : 'failure';


type Res1 = ResStatus<10000>; // "success"
type Res2 = ResStatus<20000>; // "failure"

type Res3 = ResStatus<'10000'>; // 类型“string”不满足约束“number”。

type ResStatus<ResCode extends number = 10000> = ResCode extends 10000 | 10001 | 10002 ? "success" : "failure"

type Res4 = ResStatus //"success"

// 多泛型关联

