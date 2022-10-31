// const name: String = 'thunderchen';
// // const age: number = 24;
// // const male: boolean = false;
// // const undef: undefined = undefined;
// // const nul: null = null;
// // const obj:object = {name,age,male}
// // const bigintVar1:bigint = 909089890890808098098908098n

// // const tem1:string = null
// // const tem2:string = undefined
// // const tem3:null = "thunder"
// // const tem4:null = undefined
// // const tem5:undefined = null
// // const tem6:null = {}
// // const tem7:object = undefined

// // function func1():void {

// // }
// // function func2():void {
// //     return
// // }
// // function func3():void {
// //     return undefined
// // }
// // const voidVar1:void = undefined
// // const voidVar2:void = null

// // const arr1:string[] = []
// // const arr2:Array<string> = []
// // const arr3:string[] = ["lin","thunder","chen"]
// // console.log(arr3[599]);

// // const arr4:[string,string,string] =  ["lin","thunder","chen"]
// // console.log(arr4[599]);

// const arr5: [string, number, boolean] = ['linbudu', 599, true];
// const arr6: [string, number?, boolean?] = ['linbudu', , ,];
// type TupleLength = typeof arr6.length;

// const arr7: [name: string, age: number, male: boolean] = ['linbudu', 599, true];
// const arr8: [name: string, age: number, male?: boolean] = [
//   'linbudu',
//   599,
//   true,
// ];

// const arr1: string[] = [];

// const [ele1, ele2, ...rest] = arr1;

// const arr9: [string, number, boolean, symbol] = [
//   'linbudu',
//   599,
//   true,
//   Symbol(10),
// ];
// const [name, age, male, other] = arr9;

// // interface IDescription {
// //   name: string;
// //   age: number;
// //   male: boolean;
// // }

// // const obj1: IDescription = {
// //   name: 'linbudu',
// //   age: 599,
// //   male: true,
// // };
// // interface IDescription {
// //   name: string;
// //   age: number;
// //   male?: boolean;
// //   func?: Function;
// // }
// // const obj2: IDescription = {
// //   name: 'linbudu',
// //   age: 599,
// //   male: true,
// //   // 无需实现 func 也是合法的
// // };
// // obj2.func = () => {};
// // obj2.func();

// interface IDescription {
//     readonly name: string;
//     age: number;
//   }

//   const obj3: IDescription = {
//     name: 'linbudu',
//     age: 599,
//   };

//   // 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
// //   const tmp1: Object = undefined;
// //   const tmp2: Object = null;
// //   const tmp3: Object = void 0;
//   // 无法分配到 "name" ，因为它是只读属性
// // obj3.name = "林不渡";

// const tmp4: Object = 'linbudu';
// const tmp5: Object = 599;
// const tmp6: Object = { name: 'linbudu' };
// const tmp7: Object = () => {};
// const tmp8: Object = [];

// const tmp9: String = undefined;//X
// const tmp10: String = null;//X
// const tmp11: String = void 0;//X
// const tmp12: String = 'linbudu';
// const tmp13: String = 599; // X
// const tmp14: String = { name: 'linbudu' }; // X
// const tmp15: String = () => {}; // X
// const tmp16: String = []; // X

// const tmp17: object = undefined;
// const tmp18: object = null;
// const tmp19: object = void 0;
// const tmp20: object = 'linbudu';  // X 不成立，值为原始类型
// const tmp21: object = 599; // X 不成立，值为原始类型

// const tmp22: object = { name: 'linbudu' };
// const tmp23: object = () => {};
// const tmp24: object = [];
// const tep25:symbol = Symbol(12)

// //最后是 {} 空对象表示, 一个对象字面量类型(对应到字符串字面量类型这样),
// //否则你可以认为使用{} 作为类型签名就是一个合法的, 但是内部无属性定义的空对象
// //这类似于 Object（想想 new Object()），它意味着任何非 null / undefined 的值：


// const tmp25: {} = undefined; // 仅在关闭 strictNullChecks 时成立，下同
// const tmp26: {} = null;
// const tmp27: {} = void 0; // void 0 等价于 undefined

// const tmp28: {} = 'linbudu';
// const tmp29: {} = 599;
// const tmp30: {} = { name: 'linbudu' };
// const tmp31: {} = () => {};
// const tmp32: {} = [];
// const tmp33: {} = { name: 'linbudu' };
// tmp33.age = 12 //类型“{}”上不存在属性“age”

// const tmp34:<string,unknown> = {name:"thunderchen",age:18}

// const uniqueSymbolFoo1:typeof uniqueSymbolFoo = Symbol("thunder chen")
// // 类型不兼容
// const uniqueSymbolBar: unique symbol = uniqueSymbolFoo //不能将类型“typeof uniqueSymbolFoo”分配给类型“typeof uniqueSymbolBar”。

// declare const uniqueSymbolFoo: unique symbol;
// const uniqueSymbolBaz:typeof uniqueSymbolFoo = uniqueSymbolFoo
// console.log(typeof uniqueSymbolBaz);

// const uniqueSymbolFunc:typeof uniqueSymbolFoo = uniqueSymbolFoo
// 类型不兼容
// const uniqueSymbolBar: unique symbol = uniqueSymbolFoo



declare const uniqueSymbolFoo: unique symbol;
const uniqueSymbolBaz: typeof uniqueSymbolFoo = Symbol(12) as typeof uniqueSymbolFoo
console.log(uniqueSymbolBaz);



export {};
