//联合类型
interface Tmp {
  mixed: true | true | 599 | {} | (() => {}) | (1 | 2);
}
/**
 * 需要注意的是
 *
 * 对于联合类型中的函数类型,需要使用括号()包裹起来
 *
 * 函数类型并不存在字面量类型, 因此这里 (() => ())就是一个合法的函数类型
 *
 * 你可以在联合类型中进一步嵌套联合类型,但这些嵌套的联合类型最终都会被展平到第一级中
 *
 */

interface Tmp2 {
  user:
    | {
        vip: true;
        expires: string;
      }
    | {
        vip: false;
        promotion: string;
      };
}

declare var tmp: Tmp2;
if (tmp.user.vip) {
  console.log(tmp.user.expires);
}

type Code = 10000 | 10001 | 50000;

type Status = "success" | "failure";


//对象字面量类型
interface Tmp3 {
    obj:{
        name:"thunder",
        age:18
    }
}

const tep4:Tmp3 = {
    obj: {
        name: "thunder",
        age: 18
      }
}
//无论是原始类型还是对象类型的字面量类型，它们的本质都是类型而不是值





export {};
