type A=string;

type StatusCode = 200 | 301 | 400 | 500 | 502;

type PossibleDataTypes = string | number | (() => unknown);

const status: StatusCode = 502;

//抽离一个函数类型
type Handler = (e: Event) => void;

const clickHandler:Handler =(e) => {}
const moveHandler: Handler = (e) => { };
const dragHandler: Handler = (e) => { };

//声明一个对象类型
type ObjType = {
    name: string;
    age: number;
}

type Factory<T> = T | number |string
const foo:Factory<boolean> = true
const obj:Factory<object> = {}

type FactoryWithBool = Factory<boolean>;
const foo2:FactoryWithBool = true

type Factory2<NewType> = NewType | number | string;

type MaybeNull<T> = T | null;

function Process(input:MaybeNull<{handler:()=> {}}>) {
    input?.handler();
}

type MaybeArray<T> =T | T[]
function ensureArray<T>(input:MaybeArray<T>):T[] {
    return Array.isArray(input) ? input : [input];
}
// 对于工具类型来说, 主要意义是 基于传入的泛型进行各种类型操作,得到一个新的类型
export {}