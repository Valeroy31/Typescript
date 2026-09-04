"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coder {
    name;
    music;
    age;
    lang;
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        // this.name = name
        // this.music = music
        // this.age = age
        // this.lang = lang
    }
    getAge() {
        return `Hello im ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Rock', 42);
console.log(Dave.getAge());
class WebDev extends Coder {
    computer;
    constructor(computer, music, name, age) {
        super(name, music, age);
        this.computer = computer;
        // this.computer = computer can be taken out without any issue
    }
    getLang() {
        `I write ${this.lang} on ${this.computer}`;
    }
}
const sara = new WebDev('Mac', 'Lofi', 'Sara', 25);
console.log(sara.getLang());
class Guitarist {
    name;
    instrument;
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        // this.name = name
        // this.instrument = instrument
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
/////////////////////////////////////////////////
class Peeps {
    name;
    static count = 0;
    static getCount() {
        return Peeps.count;
    }
    id;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
////////////////////////////////////////////
class Band {
    dataState;
    constructor(dataState) {
        this.dataState = dataState;
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('All elements in array must be strings');
        }
    }
}
const myBands = new Band();
myBands.data = ['Megadeth', 'Pantera'];
//# sourceMappingURL=main.js.map