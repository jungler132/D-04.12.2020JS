//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Cycles - 6.Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, 
//например, задано число 123, вывести 321.
let number = RandomNumber()
let answer = "";
let numberForScreen = number
while (number > 0) {
    answer +=(number % 10).toString()
    number = Math.floor(number/10)
}
console.log(`Число ${numberForScreen} отзеркалено в ${answer}`)
function RandomNumber() {
    return RandomNumberTwo()
}
function RandomNumberTwo() {
    return Math.floor(Math.random() * (9000))
}