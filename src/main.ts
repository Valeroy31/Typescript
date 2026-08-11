let myName: string = 'Shalom'
let meaningOfLife: number;
let isLoading: boolean

let anyDataType: any //this indicates the incoming value can be any data type and Ts should expect any

let album: string | number //this is a union data type, lets TS know the variable could hold a string pr number and either one is okay
myName = 'Shammah'
meaningOfLife = 42
isLoading = true
album = '1984' //or 1984 works

const sum = (a: number, b: string)=>{

  return a + b
}

//---------------Union type use-cases------------------

//Post id coming from an api could be a string and converted to number for use on the frontend
let postId: string | number

//Booleans could also be represented as 1 or 0
let isActive: number | boolean

//TS inference can help you out when you are not particularly sure of what the type of an expression should be
let re: RegExp = /\w+/g