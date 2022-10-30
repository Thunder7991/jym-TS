import { expectType,expectNotType } from 'tsd';

console.log('hello typescript');

//更方便的类型兼容性检查
// interface Foo {
//   name: string;
//   age: number;
// }
// interface Bar {
//   name: string;
//   job: string;
// }
// let foo: Foo = {
//   name: 'thundechen',
//   age: 18,
// };

// let bar: Bar = {
//   name: 'thudner',
//   job: 'IT',
// };
// foo = bar;

interface Foo {
  name: string;
  age: number;
}

interface Bar {
  name: string;
  job: string;
}

declare let foo: Foo;
declare let bar: Bar;

//   foo = bar;

expectType<string>("thudner")
// expectType<string>(23323)

expectNotType<Bar>(bar)