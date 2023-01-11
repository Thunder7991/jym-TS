//字面量类型
type Result7 = 1 extends 1 | 2 | 3 ? 1 : 2; // 1
type Result8 = 'lin' extends 'lin' | 'bu' | 'du' ? 1 : 2; // 1
type Result9 = true extends true | false ? 1 : 2; // 1
// 原始类型
type Result10 = string extends string | false | number ? 1 : 2; // 1
// 结论:
// 字面量类型  < 包含此字面量类型的联合类型
// 原始类型  < 包含此原始类型的联合类型

//同一基础类型
type Result11 = 'lin' | 'bu' | 'budu' extends string ? 1 : 2; //1
type Result12 = {} | (() => void) | [] extends object ? 1 : 2;
//结论:
//同一基础类型的字面量联合类型 < 此基础类型。

// 最终结论
// 字面量类型 < 包含此字面量类型的联合类型（同一基础类型） < 对应的原始类型
type Result13 = 'linbudu' extends 'linbudu' | '599'
  ? 'linbudu' | '599' extends string
    ? 2
    : 1
  : 0;


// JavaScript 中装箱对象 String 在 TypeScript 中的体现： String 类型，以及在原型链顶端傲视群雄的 Object 对象与 Object 类型。

type Result14 = string extends String ? 1 : 2; // 1
type Result15 = String extends {} ? 1 : 2; // 1
type Result16 = {} extends object ? 1 : 2; // 1
type Result18 = object extends Object ? 1 : 2; // 1

type Result17 = object extends Object ? 1 : 2; // 1
type Result20 = Object extends object ? 1 : 2; // 1

type Result19 = Object extends {} ? 1 : 2; // 1
type Result21 = {} extends Object ? 1 : 2; // 1

// 结论: 原始类型 < 原始类型对应的装箱类型 < Object 类型
