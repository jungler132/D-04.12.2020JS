//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Functions 1 - Получить строковое название дня недели по номеру дня.
let weekDay = RandomNumber()
console.log(`При получении числа ${weekDay} мы получаем название дня недели ${Days()}`)
function Days(){
    switch(weekDay){
        case 1 : 
        return "Понедельник"
        case 2 : 
        return "Вторник"
        case 3 : 
        return "Среда"
        case 4 : 
        return "Четверг"
        case 5 : 
        return "Пятница"
        case 6 : 
        return "Суббота"
        case 7 : 
        return "Воскресение"
    }
}
function RandomNumber() {
    return RandomNumberTwo() + 1
}
function RandomNumberTwo() {
    return Math.floor(Math.random() * (7))
}