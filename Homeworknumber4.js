//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//4.Посчитать выражение макс (а*б*с,  а+б+с)+3
let a,b,c
Numbers()
console.log(`a = ${a},b = ${b},c = ${c}.`)
if(Multiply() > Plus()){
    console.log("* operation > + operation")
    console.log(Multiply()+3)
}
else{
    console.log("+ operation > * operation")
    console.log(Plus()+3)
}
function RandomNumber() {
    return RandomNumberTwo() + 10
}
function RandomNumberTwo() {
   return Math.floor(Math.random() * (-15))
}
function Numbers(){
a = RandomNumber()
b = RandomNumber()
c = RandomNumber()
}
function Multiply(){
    return (a * b * c) 
}
function Plus(){
    return (a + b + c)
}