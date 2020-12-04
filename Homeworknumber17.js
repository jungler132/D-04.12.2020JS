//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Arrays - 6.Сделать реверс массива (массив в обратном направлении)
let massiv = []
let massivReverse = 0
for(let i = 0; i < 10; i++){
    massiv[i] = RandomNumber()
    console.log(massiv[i])
}
console.log(`___`)
massivReverse = massiv.reverse()
for(let i = 0; i < 10; i++){
    console.log(massivReverse[i])
}
function RandomNumber() {
    return RandomNumberTwo()
}
function RandomNumberTwo() {
    return Math.floor(Math.random() * (90))
}