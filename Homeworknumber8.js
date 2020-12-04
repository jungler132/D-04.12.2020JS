//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Cycles - 3.Найти корень натурального числа с точностью до целого.
//(рассмотреть вариант последовательного подбора и метод бинарного поиска)
let number = RandomNumber()
let isSqrt = false
for(i = 1; i < number/2; i++){
    if(i * i === number){
        console.log(`Квадратный корень числа ${number} равен ${i}`)
        isSqrt = true
    }
}
if(isSqrt === false){
    console.log(`У числа ${number} отсуствует целочисленный квадратный корень`)
}
function RandomNumber() {
    return RandomNumberTwo() + 10
}
function RandomNumberTwo() {
   return Math.floor(Math.random() * (90))
}
let number2 = Math.sqrt(number)
if(number2 % 1 === 0){
    console.log(`А этот ответ ${number2} нашел с помощью Math.sqrt`)
}
