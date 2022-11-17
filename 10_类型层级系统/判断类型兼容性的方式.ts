type Result = 'linbudu' extends string ? 1 : 2;

declare let source: string;

declare let anyType: any;

declare let neverType: never;

anyType = source;
// neverType = source

//对于变量 a = 变量b , 意味着<变量b的类型> extends <变量a的类型>成立
//即b类型是a类型的子类型,在这里即是string extends never 这明显是不成立的



