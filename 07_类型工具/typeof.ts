const str = 'linbudu';

const obj = { name: 'linbudu' };

const nullVar = null;
const undefinedVar = undefined;

const func = (input: string) => {
  return input.length > 10;
};

type Str = typeof str; // "linbudu"
type Obj = typeof obj; // { name: string; }
type Null = typeof nullVar; // null
type Undefined = typeof undefined; // undefined
type Func = typeof func; // (input: string) => boolean

const func3 = (input: string) => {
  return input.length > 10;
};

const func2: typeof func3 = (name: string) => {
  return name === 'linbudu';
};

// boolean
type FuncReturnType = ReturnType<typeof func3>;

const isInputValid = (input: string) => {
  return input.length > 10;
};

// 不允许表达式
type nstr = typeof isInputValid;

declare const strOrNumOrBool: string | number | boolean;

if (typeof strOrNumOrBool === 'string') {
  // 一定是字符串！
  strOrNumOrBool.charAt(1);
} else if (typeof strOrNumOrBool === 'number') {
  // 一定是数字！
  strOrNumOrBool.toFixed();
} else if (typeof strOrNumOrBool === 'boolean') {
  // 一定是布尔值！
  strOrNumOrBool === true;
} else {
  // 要是走到这里就说明有问题！
  const _exhaustiveCheck: never = strOrNumOrBool;
  throw new Error(`Unknown input type: ${_exhaustiveCheck}`);
}


function isString(input: unknown): boolean {
    return typeof input === "string";
  }
  
  function foo2(input: string | number) {
    if (isString(input)) {
      // 类型“string | number”上不存在属性“replace”。
      (input).replace("linbudu", "linbudu599")
    }
    if (typeof input === 'number') { }
    // ...
  }