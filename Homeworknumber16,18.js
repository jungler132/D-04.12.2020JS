//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Arrays - 5.Посчитать сумму элементов массива с нечетными индексами.
//7.Посчитать количество нечетных элементов массива
let massiv = []
let temp = 0
let counter = 0
for(let i = 0; i < 10; i++){
    massiv[i] = RandomNumber()
}
for(let i = 0; i < 10; i++){
    if(i % 2 !== 0){
        temp += massiv[i]
        console.log(`Нечетное число в массиве под индексом ${i} = ${massiv[i]} присваемое к сумме.`)
    }
}
for(let i = 0; i < 10; i++){
    if(massiv[i] % 2 !== 0){
        counter +=1
        console.log(`Нечетное число в массиве под индексом ${i} = ${massiv[i]} для подсчета общего количества нечетных чисел в массиве.`)
    }
}
console.log(`Количество нечетных элементов массива равна ${counter}`)
console.log(`Сумма элементов массива с нечетными индексами равна ${temp}`)
function RandomNumber() {
    return RandomNumberTwo()
}
function RandomNumberTwo() {
    return Math.floor(Math.random() * (90))
}
