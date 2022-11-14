import { type } from 'os';
import { stringify } from 'querystring';

type Factory<T> = T | number | string;

function Factory(typeArg) {
  return [typeArg, Number, String];
}

//会将一个对象类型的所有属性类型设置为string
//Clone会将类型完全复制
type stringify<T> = {
  [k in keyof T]: string;
};

type Clone<T> = {
  [K in keyof T]: T[K];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

interface IFoo {
  prop1: string;
  prop2: number;
}
type PartialIFoo = Partial<IFoo>;

// 等价于
// interface PartialIFoo {
//     prop1?: string;
//     prop2?: number;
//     prop3?: boolean;
//     prop4?: () => void;
//   }

type IsEqual<T> = T extends true ? 1 : 2;

type A = IsEqual<true>; // 1
type B = IsEqual<false>; // 2
type C = IsEqual<'linbudu'>; // 2
