class Coder {

     constructor(
        public readonly name: string,
       public music: string,
        private age: number,
       protected  lang: string = 'Typescript'
    ) {
        // this.name = name
        // this.music = music
        // this.age = age
        // this.lang = lang
    }

    public getAge(){
        return `Hello im ${this.age}`
    }
}

const Dave = new Coder ('Dave', 'Rock', 42)

console.log(Dave.getAge());



class WebDev extends Coder{
    constructor(
        public computer: string, 
        music:string,
        name: string,
        age: number,

    ){
        super(name, music, age)
       // this.computer = computer can be taken out without any issue
        
    }

    public getLang(){
        `I write ${this.lang} on ${this.computer}`
    }
}
const sara = new WebDev('Mac', 'Lofi', 'Sara', 25)
console.log(sara.getLang());

////////////////////////////////////////////////

interface Musician{
    name: string,
    instrument: string,
    play(action: string): string //function
}

class Guitarist implements Musician{
  

    constructor(public name: string, public instrument: string){
        // this.name = name
        // this.instrument = instrument
    }
    play(action: string){
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'));

/////////////////////////////////////////////////

class Peeps{
    static count: number = 0
    static getCount(): number{
        return Peeps.count
    }
    public id: number
    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }

    
}
const John = new Peeps('John')
    const Steve = new Peeps('Steve')
    const Amy = new Peeps('Amy')

    ////////////////////////////////////////////

class Band{
  
    constructor( private dataState: string[]){
     
    }
   public get data(): string[]{
    return this.dataState
   }

   public set data(value: string[]){
    if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
        this.dataState = value
        return
    } else{
        throw new Error ('All elements in array must be strings')
    }
   }
}

const myBands = new Band()
myBands.data = ['Megadeth', 'Pantera']