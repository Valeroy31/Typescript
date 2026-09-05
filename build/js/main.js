"use strict";
//Index Signatures
Object.defineProperty(exports, "__esModule", { value: true });
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 42
};
let prop = 'Pizza';
todaysTransactions[prop] = 30;
const netTransaction = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction] ?? 0;
    }
    return total;
};
console.log(netTransaction(todaysTransactions));
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test);
for (const key in student) {
    console.log((`${key}: ${student[key]}`));
}
Object.keys(student).map(key => {
    return `${student[key]}`;
});
const logStudentKey = (student, key) => {
    console.log(`Student ${student}: ${student[key]} `);
};
console.log(logStudentKey(student, 'GPA'));
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const key in monthlyIncomes) {
    console.log(`${key}: ${monthlyIncomes[key]}`);
}
