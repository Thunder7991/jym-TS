export default {
  Home_Page_Url: 'url1',
  Setting_Page_Url: 'url2',
  Share_Page_Url: 'url3',
};

// 或是这样：
export const PageUrl = {
  Home_Page_Url: 'url1',
  Setting_Page_Url: 'url2',
  Share_Page_Url: 'url3',
};

//替换成枚举类型如下:
enum PageUrlEnum {
  Home_Page_Url = 'url1',
  Setting_Page_Url = 'url2',
  Share_Page_Url = 'url3',
}
const home = PageUrlEnum.Home_Page_Url;
// 这么做的好处非常明显。首先，你拥有了更好的类型提示。其次，这些常量被真正地约束在一个命名空间下
enum Items {
  // 0
  Foo,
  Bar = 599,
  // 600
  Baz,
}
const returenNum = () => 100 + 499;
enum Items02 {
  Foo = returenNum(),
  Bar = 599,
  Baz,
}
// 如果你使用了延迟求值，那么没有使用延迟求值的枚举成员必须放在使用常量枚举值声明的成员之后（如上例），或者放在第一位
enum Mixed {
    Num = 599,
    Str = "thunder"
}

//枚举和对象的区别:
/**
 * 对象是单向映射的，我们只能从键映射到键值
 * 枚举是双向映射
 * 枚举成员映射到枚举值，也可以从枚举值映射到枚举成员 
 * 
 */

enum Items02 {
    Foo1,
    Bar1,
    Baz1
}
const fooValue = Items02.Foo; // 0
const fooKey = Items02[0]; // "Foo"
//会编译如下
"use strict";
var Items;
(function (Items) {
    Items[Items["Foo"] = 0] = "Foo";
    Items[Items["Bar"] = 1] = "Bar";
    Items[Items["Baz"] = 2] = "Baz";
})(Items || (Items = {}));
//需要注意的是 仅有值为数字的枚举成员才能够进行这样的双向枚举
//字符串枚举成员仍然只会进行单次映射
enum Items {
    Foo,
    Bar = "BarValue",
    Baz = "BazValue"
}

// 编译结果，只会进行 键-值 的单向映射
"use strict";
var Items;
(function (Items) {
    Items[Items["Foo"] = 0] = "Foo";
    Items["Bar"] = "BarValue";
    Items["Baz"] = "BazValue";
})(Items || (Items = {}));

//常量枚举
const enum ItemsConst {
    Foo,
    Bar,
    Baz
}
const fooValue = Items.Foo; // 0
//它和普通枚举的差异主要在访问性与编译产物
//只能通过枚举成员访问枚举值
//在编译产物中并不会存在一个额外的辅助对象（如上面的 Items 对象），
//对枚举成员的访问会被直接内联替换为枚举的值
//会编译如下：
const fooValue = 0
let a:string = undefined




