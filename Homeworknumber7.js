//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Cycles - 2.Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1).
let number = getRandomNumber()
let isBool = true
for(let i = 2; i < number; i++){
    if(number % i === 0){
        isBool = true
        break
    }
    else if (number % i !== 0){
        isBool = false
        
    }
}
if(isBool === false){
    console.log(`Число ${number} простое.`)
}
else if(isBool === true){
    console.log(`Число ${number} составное.`)
}
function getRandomNumber() {
    return RandomNumberTwo() + 10
}
function RandomNumberTwo() {
   return Math.floor(Math.random() * (90))
}