//01.12.2020 Homework JavaScript +-*/(1-5),Cycles(1-6),Arrays(1-9),Functions(1-4)
//Yenikeyev Ismail
//Functions 3 - Вводим строку, которая содержит число, написанное прописью (0-999).
//Получить само число.
// Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число.
let number = "шестьсот девять";
const massiv = [];
numberString = number.split(" ")

//console.log(numberString[0]);

for (let i = 0; i < numberString.length; i++) {
    massiv.push(numberString[i]);
}
    console.log(number);


 if (massiv.length == 3) {
     console.log(getFirst(0).toString() +  getSecond(1).toString() +  getThird().toString());
}
 
 else if (massiv.length == 2) {
     if (massiv[0].includes("ста") || massiv[0].includes("сот") || massiv[0].includes("сто")) {
         if (massiv[1] == "десять" || massiv[1].includes("надцать")){
             console.log(getFirst(0).toString() + getSecond2(1).toString());
         } 
         
         else if (massiv[1] == "один" || massiv[1] == "два" ||massiv[1] == "три" ||massiv[1] == "четыре" ||massiv[1] == "пять" ||massiv[1] == "шесть" ||massiv[1] == "семь" || massiv[1] == "восемь" ||massiv[1] == "девять"){
             console.log(getFirst3(0).toString() + getThird().toString());
            }

        else {
            console.log(getFirst(0).toString() + getSecond3(1).toString());
        }
     }
     
     else (console.log(getSecond(0).toString() + getThird().toString()))
}
 
 else if (massiv.length == 1) {
     if (massiv[0].includes("надцать") || massiv[0] == "десять" ) {
         console.log(getSecond2(0).toString());
     } 
     
     else if (massiv[0].includes("ста") || massiv[0].includes("сот") || massiv[0] == "сто") {
         console.log(getFirst2(0).toString());
     }
     
     else if (massiv[0] == "двадцать" || massiv[0] == "тридцать" || massiv[0] == "сорок" || massiv[0] == "пятьдесят" || massiv[0] == "шестьдесят" || massiv[0] == "семьдесят" || massiv[0] == "восемдесять" || massiv[0] == "девяносто") {
         console.log (getSecond3(0).toString());
     }
     
     else {
         console.log(getThird().toString());
     }
}
 function getFirst(i){
     switch(massiv[i]){
         case "сто":
             return 1
         case "двести":
             return 2
         case "триста":
             return 3
         case "четыреста":
             return 4
         case "пятьсот":
             return 5
         case "шестьсот":
             return 6
         case "семьсот":
             return  7        
         case "восемьсот":
             return  8          
         case "девятьсот":
             return 9
     }
}
 function getFirst2(i){
    switch(massiv[i]){
        case "сто":
            return 100
        case "двести":
            return 200
        case "триста":
            return 300
        case "четыреста":
            return 400
        case "пятьсот":
            return 500
        case "шестьсот":
            return 600
        case "семьсот":
            return  700        
        case "восемьсот":
            return  800        
        case "девятьсот":
            return 900
    }
}
function getFirst3(i){
    switch(massiv[i]){
        case "сто":
            return 10
        case "двести":
            return 20
        case "триста":
            return 30
        case "четыреста":
            return 40
        case "пятьсот":
            return 50
        case "шестьсот":
            return 60
        case "семьсот":
            return  70      
        case "восемьсот":
            return  80      
        case "девятьсот":
            return 90
    }
}
 function getSecond(i){
    switch(massiv[i]){
        case "двадцать":
            return 2
        case "тридцать":
            return 3
        case "сорок":
            return 4
        case "пятьдесят":
            return 5
        case "шестьдесят":
            return 6
        case "семьдесят":
            return  7        
        case "восемьдесять":
            return  8          
        case "девяносто":
            return 9

    }
}
 function getSecond2(i){
    switch(massiv[i]) {
        case "десять":
            return 10
        case "одиннадцать":
            return 11
        case "двенадцать":
            return 12
        case "тринадцать":
            return 13
        case "четырнадцать":
            return 14
        case "пятнадцать":
            return 15
        case "шестнадцать":
            return 16
        case "семнадцать":
            return  17        
        case "восемнадцать":
            return  18          
        case "девятнадцать":
            return 19

    }
}
 function getSecond3(i){
    switch(massiv[i]){
        case "двадцать":
            return 20
        case "тридцать":
            return 30
        case "сорок":
            return 40
        case "пятьдесят":
            return 50
        case "шестьдесят":
            return 60
        case "семьдесят":
            return  70        
        case "восемьдесять":
            return  80          
        case "девяносто":
            return 90

    }
}
 function getThird() {
     switch(massiv[massiv.length-1]) {
         case "нуль":
             return 0
         case "один":
             return 1
         case "два":
             return 2
         case "три":
             return 3
         case "четыре":
             return 4
         case "пять":
             return 5
         case "шесть":
             return 6
         case "семь":
             return 7
         case "восемь":
             return 8
         case "девять":
             return 9
     }
}