//难道说{} 和 object 类型相等, 也和Object类型一致?
//当然不, 在这里{}extends 和 extends {}实际上是两种完全不同的比较方式
// {} extends object 和 {} extends Object 意味着,{}  {} 是 object 和 Object 的字面量类型，是从类型信息的层面出发的
//字面量类型在基础类型之上提供了更详细的类型信息

// object extends {} 和 Object extends {} 则是从结构化类型系统的比较出发的，即 {} 作为一个一无所有的空对象，几乎可以被视作是所有类型的基类，万物的起源。如果混淆了这两种类型比较的方式，就可能会得到 string extends object 这样的错误结论。
