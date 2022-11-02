// Class 主要的结构只有构造函数 、 属性 、 方法 和 访问符
class Foo {
  prop: string;
  constructor(inputProp: string) {
    this.prop = inputProp;
  }
  print(addon:string):void {
    console.log(`${this.prop} and ${addon}`)
  }
  get propA():string {
    return `${this.prop}+A`;
  }
  //setter 方法不允许进行返回值的类型标注
  set propA(value: string) {
    this.prop = `${value}+A`
  }
}

const Foo2 = class {
    prop:string;
    constructor(inputProp:string) {
        this.prop = inputProp;
    }
    print(addon: string): void {
        console.log(`${this.prop} and ${addon}`)
      }
}
//修饰符 public private protected readonly