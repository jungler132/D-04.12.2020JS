//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Functions 2 - Вводим число (0-999), получаем строку с прописью числа.
let answer = 0
let x1 = 0
let x2 = 0
let y1 = 0
let y2 = 0
getFirstPoint()
getSecondPoint()
getAnswer()
function getFirstPoint(){
     x1 = RandomNumber()
     y1 = RandomNumber()
    console.log(`Координаты 1 точки равны x=${x1},y=${y1}.`)
}
function getSecondPoint(){
     x2 = RandomNumber()
     y2 = RandomNumber()
    console.log(`Координаты 2 точки равны x=${x2},y=${y2}.`)
}
function getAnswer(){
    console.log(`Расстояние между двумя точками равна = ${Math.floor(getDistance())}`)
}
function getDistance(){
    answer = Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2)
    return Math.sqrt(answer)
}
function RandomNumber() {
    return RandomNumberTwo() + 1
}
function RandomNumberTwo() {
    return Math.floor(Math.random() * (50))
}