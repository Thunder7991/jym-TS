function handle1(input: any): any {}

function handle2(input: string | number | {}): string | number | {} {}

const shouldBeString = handle2('linbudu');
const shouldBeNumber = handle2(599);
const shouldBeObject = handle2({ name: 'linbudu' });

//目前参数已经明确,但是返回值却无法和传参关联起来, 如果说使用函数的重载
function handle(input: string): string;
function handle(input: number): number;
function handle(input: {}): {};
function handle(input: string | number | {}): string | number | {} {}

//显然这样非常的麻烦

function handle4<T>(input: T): T {
  return input;
}

const author = 'linbudu'; // 使用 const 声明，被推导为 "linbudu"

let authorAge = 18; // 使用 let 声明，被推导为 number

handle(author); // 填充为字面量类型 "linbudu"
handle(authorAge); // 填充为基础类型 number

function swap<T, U>([start, end]: [T, U]): [U, T] {
  return [end, start];
}

const swapped1 = swap(['linbudu', 599]);
const swapped2 = swap([null, 599]);
const swapped3 = swap([{ name: 'linbudu' }, {}]);

function handle5<T extends string | number>(input: T): T {}

function handle6<T extends string | number>(input: T): T {}

function swap<T extends number, U extends number>([start, end]: [T, U]): [
  U,
  T,
] {}

const object = { a: 1, b: '2', c: 3 };

_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
function pick<T extends object, U extends keyof T>(
  object: T,
  ...props: Array<U>
): Pick<T, U> {}

const handle = <T>(input:T):T => {}

// tsx中
const handle = <T extends any>(input: T): T => {}
