// 修饰符
// public / private / protected / readonly

class Foo {
  private prop: string;
  constructor(inputPorop: string) {
    this.prop = inputPorop;
  }
  protected print(addon: string): void {
    console.log(`${this.prop} and ${addon}`);
  }
  public get propA(): string {
    console.log(this.print('thunder'));

    return `${this.prop}+A`;
  }

  public set propA(value: string) {
    this.propA = `${value}+A`;
  }
}
let foo = new Foo('thunder');
foo.propA;
//public：此类成员在类、类的实例、子类中都能被访问。
//private: 此类成员仅能在类的内部被访问
//protected: 此类成员仅能在类于子类中被访问 , 你可以将类和类的实例当成两种概念，即一旦实例化完毕（出厂零件），那就和类（工厂）没关系了，即不允许再访问受保护的成员。

// 我们可以在构造函数中对参数应用访问性修饰符:

class Foo2 {
  constructor(public arg1: string, private arg2: boolean) {}
  isTest() {
    console.log(this.arg2);
  }
}
// 第二个参数true, 在类里面可以直接通过this调用
new Foo2('linbudu', true).isTest();

// 静态成员
//在类的内部静态成员无法通过this来访问,需要通过 Foo3.staticHandler进行访问
class Foo3 {
  static staticHandler() {}
  public instanceHandler() {}
}

// babel 转译
var Foo4 = /** @class */ (function () {
  function Foo() {}
  Foo.staticHandler = function () {};
  Foo.prototype.instanceHandler = function () {};
  return Foo;
})();

//静态成员直接被挂载在函数体上, 而实例成员挂载在原型上
// 静态成员不会被实例继承, 它始终只属于当前定义的这个类
// 而原型对象上的实例成员则会沿着原型链进行传递

class Utils {
  public static identifier = 'thunder';

  public static makeUHappy() {
    Utils.studyWithU();
    // ... 
  }

  public static studyWithU() {}
}
Utils.makeUHappy();
let utils = new Utils()

