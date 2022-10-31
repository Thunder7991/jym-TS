interface Res {
  code: 10000 | 10001 | 50000;
  status: 'success' | 'failure';
  data: any;
}
declare var res: Res;
// if (res.status === 'success') {
//   console.log(res);
// }

const str: 'thunder' = 'thunder';
const num: 123 = 123;
const bool: true = true;

// 报错！不能将类型“"linbudu599"”分配给类型“"linbudu"”。
// const str1: "linbudu" = "linbudu599";

const str2: string = 'linbudu';
const str3: string = 'linbudu599';
//原始类型的值可以包括任意的同类型值
//而字面量类型要求的是值级别的字面量一致

interface Tmp {
  bool: true | false;
  num: 1 | 2 | 3;
  str: 'lin' | 'bu' | 'du';
}
//联合类型
