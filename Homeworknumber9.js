//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Cycles - 4.Вычислить факториал числа n!
var number = RandomNumber()
var answer = 1;
for (i = 1; i <= number; i++){
    answer = answer * i;
}
console.log(`Факториал числа ${number}! равен ${answer}`);
function RandomNumber() {
    return RandomNumberTwo() + 4
}
function RandomNumberTwo() {
   return Math.floor(Math.random() * (5))
}