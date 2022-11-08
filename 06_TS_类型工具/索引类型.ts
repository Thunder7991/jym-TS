// 索引类型包括: 索引签名类型 索引类型查询  索引类型访问

// 索引签名类型
interface AllStringTypes {
  [key: string]: string;
}
type AllStringTypes = {
  [key: string]: string;
};

type PropType1 = AllStringTypes['linbudu']; // string
type PropType2 = AllStringTypes['599']; // string
//结构就是全部为string类型
const foo: AllStringTypes = {
  linbudu: '599',
};

interface AllStringInterface {
  propsA: number;
  [key: string]: boolean;
}
interface StringOrBooleanTypes {
  propA: number;
  propB: boolean;
  [key: string]: number | boolean;
}

interface AnyTypeHere {
  [key: string]: any;
}

const foo: AnyTypeHere['linbudu'] = 'any value';

//索引类型查询
interface Foo {
  thunder: 1;
  500: 2;
}

type Fookeys = keyof Foo; // "linbudu" | 599

// 索引类型访问
interface NumberRecord {
  [key: string]: number;
}

type PropType = NumberRecord[string]; //number

interface Foo {
  propA: number;
  propB: boolean;
}

type PropAType = Foo['propA']; // number
type PropBType = Foo['propB']; // boolean

interface Foo {
  propA: number;
  propB: boolean;
  propC: string;
}

type PropTypeUnion = Foo[keyof Foo]; // string | number | boolean

interface Foo {
  propA: number;
}

// 类型“Foo”没有匹配的类型“string”的索引签名。
type PropAType = Foo[string];

type Stringfy2<T> = {
    [k in keyof T]:string
}

interface Foo {
    prop1: string;
    prop2: number;
    prop3: boolean;
    prop10: () => void;
  }
  
//   type StringifiedFoo = Stringfy2<Foo>;

  type Clone<T> = {
    [K in keyof T]: T[K];
  };

  type StringifiedFoo = Clone<Foo>;
