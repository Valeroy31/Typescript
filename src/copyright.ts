// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear().toString()
// year?.setAttribute("datetime", thisYear)
// year?.textContent = thisYear

const year = document.getElementById("year") as HTMLElement
 const thisYear: string = new Date().getFullYear().toString()
 year?.setAttribute("datetime", thisYear)
year.textContent = thisYear


// const year: HTMLElement | null = document.getElementById("year")
// const thisYear = new Date().getFullYear().toString()
// if (year){
//     year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
// }