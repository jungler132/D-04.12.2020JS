//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//5.Написать программу определения оценки студента по его рейтингу, на основе следующих правил
let ranking = 0
ranking = getRandomNumber()
console.log("Student`s ranking")
if(0 <= ranking && ranking <= 19 ){
    getRankF()
}
else if (20 <= ranking && ranking <= 39){
    getRankE()
}
else if (40 <= ranking && ranking <= 59){
    getRankD()
}
else if (60 <= ranking && ranking <= 74){
    getRankC()
}
else if (75 <= ranking && ranking <= 89){
    getRankB()
}
else if (90 <= ranking && ranking <= 100){
    getRankA()
}
function getRandomNumber() {
    return RandomNumberTwo() + 10
}
function RandomNumberTwo() {
   return Math.floor(Math.random() * (90))
}
function getRankF(){
    console.log(`${ranking} -- F`)
}
function getRankE(){
    console.log(`${ranking} -- E`)
}
function getRankD(){
    console.log(`${ranking} -- D`)
}
function getRankC(){
    console.log(`${ranking} -- C`)
}
function getRankB(){
    console.log(`${ranking} -- B`)
}
function getRankA(){
    console.log(`${ranking} -- A`)
}

