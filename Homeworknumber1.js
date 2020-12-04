//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//1.Если а – четное посчитать а*б, иначе а+б.
let a,b
a = setRandomNumber()
b = setRandomNumber()
if(a % 2 === 0){
    console.log(`a number is even ${a}`)
    console.log(`b number is ${b}`)
    console.log(a * b)                                      
}
else{
    console.log(`a number is not even ${a}`)
    console.log(`b number is ${b}`)
    console.log(a + b)
}
function setRandomNumber() {
    return Math.floor(Math.random() * 100)
}

