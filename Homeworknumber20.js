//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Arrays 9 - Отсортировать массив (пузырьком (Bubble)
let massiv = [];
let temp = 0;
for(let i = 0; i < 10; i++){
    massiv[i] = RandomNumber()
    console.log(massiv[i])
}
// massiv.sort(numSort)
//  function numSort(a,b){
//     return a - b;
// }                                    //sort method  delete.
// console.log("--------")
// for(let i = 0; i < 10; i++){
//     console.log(massiv[i])
// }
for(i = 0; i < massiv.length - 1; i ++){
    for(p = i + 1; p < massiv.length; p++){
        if(massiv[i] > massiv[p]){
            temp = massiv[i]
            massiv[i] = massiv[p]
            massiv[p] = temp
        }
    }
}
console.log("-------")
for(let i = 0; i < 4; i++){
    console.log(massiv[i])
}
function RandomNumber() {
    return RandomNumberTwo()
}
function RandomNumberTwo() {
    return Math.floor(Math.random() * (90))
}


