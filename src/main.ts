//Index Signatures

interface transactionObj {
    [index: string]: number
     Pizza: number
    Books: number
    Job: number
}

const todaysTransactions: transactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 42
}
let prop:string = 'Pizza'

todaysTransactions[prop] = 30

const netTransaction =(transactions: transactionObj)=>{
    let total = 0
    for (const transaction in transactions) {
       total+= transactions[transaction] ?? 0   
        
    }
    return total
}

console.log(netTransaction(todaysTransactions));

////////////////////////////////////////////////////

interface Student{
     [key: string]: string | number | number[]
    name: string,
    GPA: number,
    classes?: number[]
}
const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100,200]
}
// console.log(student.test);

for(const key in student){
    console.log((`${key}: ${student[key] }`));
    
}

Object.keys(student).map(key=>{
    return `${student[key as keyof typeof student] }`
})

const logStudentKey = (student: Student, key: keyof Student): void=>{
    console.log(`Student ${student}: ${student[key]} `);
    
}

console.log(logStudentKey(student, 'GPA'));

//////////////////////////////////////////////////

// interface Income{
//     [key: string]: number
//     }
type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>
const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const key in monthlyIncomes) {
    
    console.log(`${key}: ${monthlyIncomes[key as keyof Incomes]}`);
    
    
}