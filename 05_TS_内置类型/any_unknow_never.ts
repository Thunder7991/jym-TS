//any : 表示 "任意类型"
// log(message?: any, ...optionalParams: any[]): void

// let foo;

// function func() {}

// // 被标记为 any 类型的变量可以拥有任意类型的值
// let anyVar: any = 'linbudu';

// anyVar = false;
// anyVar = 'linbudu';
// anyVar = {
//   site: 'juejin',
// };

// anyVar = () => {};
// //被标记为具体类型的变量也可以接受任何any类型的值
// const val1: string = anyVar;
// const val2: number = anyVar;
// const val3: () => {} = anyVar;
// const val4: {} = anyVar;
// //可以在any类型变量上任意地进行操作, 包括赋值 访问 方法调用等
// let anyVar2: any = null;
// anyVar2.foo.bar.baz();
// anyVar2[0][1][2].prop1;
//为了表示一个无拘无束的任意类型, 它能兼容所有类型, 也能购被所有类型兼容

//any 的本质是类型系统中顶级类型, 即 Top Type

//如果是类型不兼容报错导致你使用any, 考虑用类型断言替代
//如果是类型太复杂导致你不想全部声明而使用any , 考虑将这一处的类型去断言为你需要的最简类型。如你需要调用 foo.bar.baz()，就可以先将 foo 断言为一个具有 bar 方法的类型。
//如果你是想表达一个未知类型，更合理的方式是使用 unknown。

// unknown 类型和 any 类型有些类似，一个 unknown 类型的变量可以再次赋值为任意其它类型，但只能赋值给 any 与 unknown 类型的变量：

// let unknownVar:unknown = "thunderchen"

// unknownVar = false;
// unknownVar = "linbudu";
// unknownVar = {
//   site: "juejin"
// };
// unknownVar = () => { }

// const val1: string = unknownVar; // Error
// const val2: number = unknownVar; // Error
// const val3: () => {} = unknownVar; // Error
// const val4: {} = unknownVar; // Error

// const val5: any = unknownVar;
// const val6: unknown = unknownVar;

// let unknownVar: unknown;
// (unknownVar as { foo: () => {} }).foo();

// //never类型
// type UnionWithNever = 'thunder' | 599 | true | void | never;
// //void 作为类型表示一个空类型, 就像灭幼返回值的函数使用void 来作为返回值类型标注一样,
// // void 类型就想JS之后的null一样代表这里有类型, 但是个空类型

// /**
//  * never 类型不携带任何的类型信息
//  */

// declare let v1: never;
// declare let v2: void;

// v1 = v2; // X 类型 void 不能赋值给类型 never

// v2 = v1;

// // never 类型被称为Bottom Type, 是整个类型系统层级中最底层的类型

// // 和null、undefined 一样，
// // 它是所有类型的子类型，但只有 never
// // 类型的变量能够赋值给另一个 never 类型变量。

// let a: number = 10;
// function justThrow(): never {
//   throw new Error();
// }

// function foo2(input: number) {
//   if (input > 1) {
//     justThrow();
//     // 等同于 return 语句后的代码，即 Dead Code
//     const name = 'linbudu';
//   }
// }

declare const strOrNumOrBool: string | number | boolean;


// if (typeof strOrNumOrBool === 'string') {
//   console.log('str!');
// } else if (typeof strOrNumOrBool === 'number') {
//   console.log('num!');
// } else if (typeof strOrNumOrBool === 'boolean') {
//   console.log('bool!');
// } else {
//   throw new Error(`Unknown input type: ${strOrNumOrBool}`);
// }
if (typeof strOrNumOrBool === "string") {
  // 一定是字符串！
strOrNumOrBool.charAt(1);
} else if (typeof strOrNumOrBool === "number") {
strOrNumOrBool.toFixed();
} else if (typeof strOrNumOrBool === "boolean") {
strOrNumOrBool === true;
} else {
  // never 抛出错误 
const _exhaustiveCheck: never = strOrNumOrBool;
throw new Error(`Unknown input type: ${_exhaustiveCheck}`);
}



