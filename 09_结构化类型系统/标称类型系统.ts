// type USD = number;
// type CNY = number;

// const CNYCount: CNY = 200;
// const USDCount: USD = 200;

// function addCNY(source: CNY, input: CNY) {
//   return source + input;
// }

// addCNY(CNYCount, USDCount);

class Cat {}
// 实现一只短毛猫！
class ShorthairCat extends Cat {}

//交叉类型实现信息的附加
export declare class TagProtector<T extends string> {
  protected __tag__: T;
}
export type Nominal<T, U extends string> = T & TagProtector<U>;
export type CNY = Nominal<number, 'CNY'>;

export type USD = Nominal<number, 'USD'>;

const CNYCount = 100 as CNY;

const USDCount = 100 as USD;

function addCNY(source: CNY, input: CNY) {
  return (source + input) as CNY;
}

addCNY(CNYCount, CNYCount);

addCNY(CNYCount, USDCount);



class CNY {
  private __tag!: void;
  constructor(public value: number) {}
}
class USD {
  private __tag!: void;
  constructor(public value: number) {}
}

const CNYCount = new CNY(100);
const USDCount = new USD(100);
function addCNY(source: CNY, input: CNY) {
  return (source.value + input.value);
}
addCNY(CNYCount, CNYCount);

// 报错了！
addCNY(CNYCount, USDCount);
//对上面补充,这两种方式的本质都是通过非公开的额外属性实现了类型信息的附加, 从而使得结构化类型系统将结构一致的两个类型也视为不兼容的

declare  const tag:unique

declare type Tagged<Token> = {
  readonly[tag]:Token;
}

export {};
