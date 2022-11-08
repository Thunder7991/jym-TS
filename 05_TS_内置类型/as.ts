let unknownVar: unknown;
(unknownVar as { foo: () => {} }).foo();

const str: string = 'thunder';

(str as any).func().foo().prop;

// function foo(union: string | number) {
//   if ((union as string).includes('thunder')) {
//   }
//   if ((union as number).toFixed() === '999') {
//   }
// }

interface IFoo {
  name: string;
}
type IFooSelect = Partial<Record<string, string>>;
declare const obj: {
  foo: IFoo;
};

const { foo = {} as IFoo } = obj;
export {};

//双床断言
// const str2:string = "thunder";
// (str2 as { handler: () => {} }).handler();
// 我们需要这样写

const str2: string = 'linbudu';

(str2 as unknown as { handler: () => {} }).handler();

// 使用尖括号断言
(<{ handler: () => {} }>(<unknown>str2)).handler();

// 非空断言
// 需要使用!
declare const foo2: {
  func?: () => {
    prop?: number | null;
  };
};
foo2.func!().prop!.toFixed();
//或者
foo2.func?.().prop?.toFixed();

//常见使用方法
const element = document.querySelector('#id')!;
const target = [1, 2, 3, 599].find((item) => item === 599)!;

(
  (
    foo2.func as () => {
      prop?: number;
    }
  )().prop as number
).toFixed();

interface IStruct {
  foo: string;
  bar: {
    barPropA: string;
    barPropB: number;
    barMethod: () => void;
    baz: {
      handler: () => Promise<void>;
    };
  };
}

// const newObj:IStruct = {}
const newObj=<IStruct>{
    bar:{
       
        baz:{
        
        }
    }
}