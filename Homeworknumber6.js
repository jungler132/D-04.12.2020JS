//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Cycles - 1.Найти сумму четных чисел и их количество в диапазоне от 1 до 99.
let counter = 0
let result = 0
for(let i = 1; i< 100; i++){
    if(i % 2 === 0){
        counter += 1
        result += i
    }
}
console.log(`Even numbers count = ${counter}`)
console.log(`Even numbers summ = ${result}`)