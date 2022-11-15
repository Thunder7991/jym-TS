// class Cat {
//   meow() {}
//   eat() {}
// }
// class Dog {
//   eat() {}
// }
// function feedCat(cat: Cat) {}
// feedCat(new Dog()) // 报错

class Cat {
  eat() {}
}

class Dog {
  bark() {}
  eat() {}
}

function feedCat(cat: Cat) {}

feedCat(new Dog()); //不会报错

//在比较对象类型的属性时, 同样会采用结构化类型系统进行判断 . 而对结构中的函数类型(即方法)进行比较时,同样存在类型的兼容性比较
class Cat2 {
    eat(): boolean {
      return true
    }
  }
  
  class Dog2 {
    eat(): number {
      return 599;
    }
  }
  
  function feedCat2(cat: Cat) { }
  // 报错！
  feedCat2(new Dog2())