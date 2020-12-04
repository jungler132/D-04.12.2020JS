//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Cycles - 5.Посчитать сумму цифр заданного числа
let number = RandomNumber()
let numberForScreen = number
let answer = 0;
while (number > 0) {
    answer += number % 10
    number = Math.floor(number/10)
}
console.log(`Сумма все цифр заданного числа ${numberForScreen} равна ${answer}.`)
function RandomNumber() {
    return RandomNumberTwo()
}
function RandomNumberTwo() {
   return Math.floor(Math.random() * (9000))
}