// const name: string = 'thunderchen';
// const age: number = 24;
// const male: boolean = false;
// const undef: undefined = undefined;
// const nul: null = null;
// const obj:object = {name,age,male}
// const bigintVar1:bigint = 909089890890808098098908098n

// const tem1:string = null
// const tem2:string = undefined
// const tem3:null = "thunder"
// const tem4:null = undefined
// const tem5:undefined = null
// const tem6:null = {}
// const tem7:object = undefined


// function func1():void {
    
// }
// function func2():void {
//     return
// }
// function func3():void {
//     return undefined
// }
// const voidVar1:void = undefined
// const voidVar2:void = null

// const arr1:string[] = []
// const arr2:Array<string> = []
// const arr3:string[] = ["lin","thunder","chen"]
// console.log(arr3[599]);

// const arr4:[string,string,string] =  ["lin","thunder","chen"]
// console.log(arr4[599]);

const arr5: [string, number, boolean] = ['linbudu', 599, true];
const arr6: [string, number?, boolean?] = ['linbudu', , ,];
type TupleLength = typeof arr6.length


export {};
