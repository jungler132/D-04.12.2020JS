//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Arrays 8 -Поменять местами первую и вторую половину массива,
//например, для массива 1 2 3 4, результат 3 4 1 2
let massiv = []
for(let i = 0; i < 10; i++){

    massiv[i] = RandomNumber()
    console.log(massiv[i])
}
console.log("-")
for(i = 0; i < massiv.length;i++){
    if(i < massiv.length / 2){
        console.log(massiv[i + (massiv.length / 2)])
    }
    else{
        console.log(massiv[i - (massiv.length/2)])
    }
}

function RandomNumber() {
    return RandomNumberTwo()
}
function RandomNumberTwo() {
    return Math.floor(Math.random() * (90))
}