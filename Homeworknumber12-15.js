//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Arrays - 1-Найти минимальный элемент массивa.2-Найти максимальный элемент массива.
//3-Найти индекс минимального элемента массива.4-Найти индекс максимального элемента массива.
let massiv = []
let temp = 0
let minNumbOfArray = 0
let maxNumbOfArray = 0
let minNumbIndexOfArray = 0
let maxNumbIndexOfArray = 0
for(let i = 0; i < 10; i++){
    massiv[i] = RandomNumber()
}
temp = massiv[0]
for(let i = 0; i < 10; i++){
    if(temp > massiv[i+1]){
        temp = massiv[i+1]
            minNumbIndexOfArray = i + 1     
        minNumbOfArray = temp
    }
    console.log(massiv[i])
}
temp = massiv[0]
for(let i = 0; i < 10; i++){
    if(temp < massiv[i+1]){
        temp = massiv[i+1]
        maxNumbIndexOfArray = i + 1          
        maxNumbOfArray = temp
    }
}
console.log(`Минимальный элемент массива равен ${minNumbOfArray} индекс которого равен ${minNumbIndexOfArray}`)
console.log(`Максимальный элемент массива равен ${maxNumbOfArray} индекс которого равен ${maxNumbIndexOfArray}`)
function RandomNumber() {
    return RandomNumberTwo()
}
function RandomNumberTwo() {
    return Math.floor(Math.random() * (9000))
}
        