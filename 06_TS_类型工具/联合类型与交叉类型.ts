//交叉类型
interface NameStruct {
  name: string;
}
interface AgeStruct {
  age: number;
}

type ProfileStruct = NameStruct & AgeStruct;
const proFile: ProfileStruct = {
  name: 'thunder',
  age: 18,
};

type StrAndNum = string & number; //nuver

type struct1 = {
  primitiveProp: string;
  objectProp: {
    name: string;
  };
};
type Struct2 = {
  primitiveProp: number;
  objectProp: {
    age: number;
  };
};
type Composed = struct1 & Struct2;

type PrimitivePropType = Composed['primitiveProp']; // never
type ObjectPropType = Composed['objectProp']; // { name: string; age: number; }

type UnionInterSection1 = (1 | 2 | 3) & (1 | 2); // 1 | 2
type UnionIntersection2 = (string | number | symbol) & string; // string


export {};
