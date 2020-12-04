//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//3.Найти суммы только положительных из трех чисел.
let a,b,c,d,o,counter = 0
getNumbers()
let massive = []
massive.push(a,b,c)
d = massive.filter(i=> i>0)
d.forEach(p=> console.log(p))
for(o = 0;o < d.length; o++){
    counter += d[o]
}
function RandomNumber() {
    return RandomNumberTwo() + 10
}
function RandomNumberTwo() {
   return Math.floor(Math.random() * (-15))
}
console.log(`result is ${counter}`)
function getNumbers(){
a = RandomNumber()
b = RandomNumber()
c = RandomNumber()
}