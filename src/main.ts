let stringArr = ['one', 'hey', 'shammah']
let primarchs = ['Angron', 'Perturabo', 'Rogal Dorne', 40000]

let mixedData = ['EVH', 1984, true]

// stringArr[0] = 44 wrong, as the stringArr only and strictly has the type :String to it
stringArr[0] = 'John' //correct

// primarchs[0] = true //wrong. PrimarchArr only takes in string and number types but not boolean
primarchs[0] = 30000 //correct. The primarchs array takes in both string and number types

primarchs = stringArr //correct. As primarchs takes in string types alongside number

mixedData = primarchs //correct. mixed data takes in both number and string types as well as boolean

// primarchs = mixedData wrong. While mixedData takes in combination of strings, numbers and boolean, primarch is limited to strings and numbers hence tweaks out when assigned an array with boolean.
// Type '(string | number | boolean)[]' is not assignable to type '(string | number)[]'.Type 'string | number | boolean' is not assignable to type 'string | number'. Type 'boolean' is not assignable to type 'string | number'.

let test = []
let bands: string[] = [] //an array that can only hold string data
//bands.push(2) //wrong. Wrong type
bands.push('Megadeth') //correct. Right type

//the length of the array or the order of the types in the array does not matter to TS. It just knows what types belong in the array - however, if you want to be more strict and define something that is locked in to a type in a specific element position and a specific length of an array, you create a tupple

let myTuple: [string, number, boolean] = ['Shammah', 42, true]
myTuple.push('John')
console.log(myTuple);

//-------------Objects------------------------
let myObj: object
myObj = []
myObj = bands
myObj = {}

const exampleObj = {
  prop1: 'Shammah',
  prop2: 'true'
}
//create the object type
type thinkers = {
  name?: string,
  active: boolean,// an optional chaining before the type value says the value can either be a string type or undefined
  numberOfBooks: (string | number)
}
// assign an object using the type format and reference the followed type
const philosophers: thinkers = {
  name: 'Nietzche',
  active: false,
  numberOfBooks: 12
}
//specify the type of the parameter to expect
//Function with explicit parameter and return types
const getPhilosophers = (Parameter : thinkers): string=>{
  return `Hello ${Parameter.name?.toUpperCase()}`
}

console.log(getPhilosophers(philosophers));

//-------------------ENUMS---------------------------
//"Unlike most TypeScript features, Enums are not a type-level addition to JS but something added to the language and runtime"
enum Grade {
  F,
  D,
  C,
  B,
  A
}



const travellers =(people: string[] | string)=>{
  if (Array.isArray(people)) {
    console.log(`Welcome ${people.join(' and ')}`)
  }
  else if(typeof people === 'string'){
    // console.log(`Hello ${people}, the lone traveller`);
    
  }
}
travellers("Shammah")

type mathFunction = (a: number, b: number) => number

const multiply: mathFunction =(a, b)=>{
  return a * b
}
multiply(2,3)

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
   console.log( x.toUpperCase());
   console.log(  y.toLowerCase());
   
  
            } else {
    console.log(x);
    console.log(y);

  }
}
example('hello', 'HELLO')
  
const total =(...nums: number[]): number=>{
  return nums.reduce((prev, current)=> prev + current)
}
total(2, 5, 7)

// ------------------------NEVER TYPE-------------
//Error functions return never types as results
const createError = (errMsg: string) =>{
  throw new Error(errMsg)
}

//infinite loops return never type as well
const infinite = ()=>{
  let i: number = 1
  while(true){
    i++
    if(i > 100) break
  } //infinite loop with never type which can be destructive. However to correct the type, we could add a condition to break the loop
}

 //use of never type

 const isNumber = (value: any): boolean =>{
 return  typeof value === 'number' ? true : false
 }
 const numberOrString =(value: string | number): string=>{
  if(typeof value === 'string') return 'string'
  if(isNumber(value)) return 'number'
  return createError('This should never happen!')
 }