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
export {};
