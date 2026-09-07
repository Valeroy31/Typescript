//generics
const stringEcho = (arg:string): string=> arg
const echo = <T> (arg:T): T=> arg

const isObj = <T> (arg: T): boolean=>{
    return(typeof arg === 'object' && !Array.isArray(arg) && arg!== null)
}

// console.log(isObj(true));
// console.log(isObj('John'));
// console.log(isObj([1,2,3]));
// console.log(isObj({name: 'John'}))
// console.log(isObj(null))

const isTrue = <T>(arg: T): {arg: T, is: boolean}=>{
    return{arg, is: Boolean(arg)}
}

function identity<Type>(arg: Type): Type {
  return arg;
}
let output = identity(['string', 47])
console.log(output);


function loggingIdentity<Type>(arg: Type[]): Type[]{
   console.log(arg.length);
   
    return arg
}
loggingIdentity([])
interface hasId {
    id: number
}

const getUserProp = <T extends hasId, K extends keyof T> (Users: T[], key: K): T[K][]=>{
    return Users.map((user)=> user[key])
}

//Using generic in a class

class StateObject<T>{
    private data: T

    constructor(value: T){
        this.data = value
    }
    get state(): T {
        return this.data
    }
    set state(value: T){
        this.data = value
    }

}
const store = new StateObject("John")

console.log(store.state);
//store.state = 12

const myState = new StateObject<(string|number|boolean)[]>([15])
