//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//2.Определить какой четверти принадлежит точка с координатами (х,у).
let x,y
x = setRandomNumber()
y = setRandomNumber()
if(x > 0 && y > 0){
    PointsState()
    console.log("First quarter")
}
else if(x < 0 && y > 0){
    PointsState()
    console.log("Second quarter")
}
else if(x < 0 && y < 0){
    PointsState()
    console.log("Third quarter")
}
else if(x > 0 && y < 0){
    PointsState()
    console.log("Fourth quarter")
}
else if(x === 0 && y === 0){
    PointsState()
    console.log("Zero point state")
}
 function setRandomNumber() {
     return RandomNumberTwo() + 10
}
 function RandomNumberTwo() {
    return Math.floor(Math.random() * (-15))
}
function PointsState(){
    console.log(`x point is : ${x}`)
    console.log(`y point is : ${y}`)
}