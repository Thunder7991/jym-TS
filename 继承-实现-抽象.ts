//基类
class Base {
  print() {}
  printWithLove() {}
}
//派生类
class Derived extends Base {
  constructor() {
    super();
  }
  //在派生类中覆盖基类方法时，我们并不能确保派生类的这一方法能覆盖基类方法
  override print() {
    super.print();
  }
}
//抽象类: 一个类中应该有哪些成员(属性\方法等),一盒抽象方法描述了这一方法在实际实现中的结构

//象方法其实描述的就是这个方法的入参类型与返回值类型。
abstract class AbsFoo {
  abstract absProp: string;
  abstract get absGetter(): string;
  abstract absMethod(name: string): string;
}

class Foo2 implements AbsFoo {
  absProp: string = 'thunder';
  get absGetter(): string {
    return 'chen';
  }
  absMethod(name: string): string {
    return name;
  }
}

//需要注意的是 无法声明静态的抽象成员

//如果使用 interface
interface FooStruct {
  absProp: string;
  get absGetter(): string;
  absMethod(input: string): string;
}
class Foo implements FooStruct {
  absProp: string = 'linbudu';

  get absGetter() {
    return 'linbudu';
  }

  absMethod(name: string) {
    return name;
  }
}
// 我们还可以使用Newable Interface
class Foo3 {}

interface FooStruct {
  new (): Foo3;
}

declare const NewableFoo: FooStruct;

const foo = new NewableFoo();

//私有构造函数
//表示: 类的构造函数被标记为私有, 且只允许在类内部访问
class Foo4 {
  private constructor() {}
}
class Utils4 {
    public static identifier = "linbudu";
    
    private constructor(){}
  
    public static makeUHappy() {
    }
  }

//   SOLID 原则 
enum LoginType {
    WeChat,
    TaoBao,
    TikTok,
    // ...
  }
  class Login {
    public static handler(type: LoginType) {
      if (type === LoginType.WeChat) { }
      else if (type === LoginType.TikTok) { }
      else if (type === LoginType.TaoBao) { }
      else {
        throw new Error("Invalid Login Type!")
      }
    }
  }

  abstract class LoginHandler {
    abstract handler(): void
  }
  
  class WeChatLoginHandler implements LoginHandler {
    handler() { }
  }
  
  class TaoBaoLoginHandler implements LoginHandler {
    handler() { }
  }
  
  class TikTokLoginHandler implements LoginHandler {
    handler() { }
  }
  
  
  class Login2 {
    public static handlerMap: Record<LoginType, LoginHandler> = {
      [LoginType.TaoBao]: new TaoBaoLoginHandler(),
      [LoginType.TikTok]: new TikTokLoginHandler(),
      [LoginType.WeChat]: new WeChatLoginHandler(),
  
    }
    public static handler(type: LoginType) {
      Login2.handlerMap[type].handler()
    }
  }

export {};
