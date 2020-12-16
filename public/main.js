//...............................................mes nombres
let nb1 = document.querySelector('#nb1');
let nb2 = document.querySelector('#nb2');
let nb3 = document.querySelector('#nb3');
let nb4 = document.querySelector('#nb4');
let nb5 = document.querySelector('#nb5');
let nb6 = document.querySelector('#nb6');
let nb7 = document.querySelector('#nb7');
let nb8 = document.querySelector('#nb8');
let nb9 = document.querySelector('#nb9');
let nb0 = document.querySelector('#nb0');

//.............................................mes operateurs
let add = document.querySelector('#add');
let substr = document.querySelector('#substr');
let multi = document.querySelector('#multi');
let divi = document.querySelector('#divi');
let cor = document.querySelector('#correction');
let egal = document.querySelector('#egal') 

//............................................mon input

let inputValue = document.querySelector("input");
//............................................mes values nombre
//     nbA = Number(inputValue.value)
//     console.log(nbA);
let nbA 
let nbB

let nbV = []

nb1.addEventListener("click",function() {
    nb1.value = "1"
    inputValue.value = inputValue.value + "1"

    console.log(inputValue.value);
})

nb2.addEventListener("click",function() {
    nb2.value = "2"
    inputValue.value = inputValue.value + "2"

    console.log(inputValue.value);
})

nb3.addEventListener("click",function() {
    nb3.value = "3"
    inputValue.value = inputValue.value + "3"

    console.log(inputValue.value);
})

nb4.addEventListener("click",function() {
    nb4.value = "4"
    inputValue.value = inputValue.value + "4"

    console.log(inputValue.value);
})

nb5.addEventListener("click",function() {
    nb5.value = "5"
    inputValue.value = inputValue.value + "5"

    console.log(inputValue.value);
})

nb6.addEventListener("click",function() {
    nb6.value = "6"
    inputValue.value = inputValue.value + "6"

    console.log(inputValue.value);
})

nb7.addEventListener("click",function() {
    nb7.value = "7"
    inputValue.value = inputValue.value + "7"

    console.log(inputValue.value);
})

nb8.addEventListener("click",function() {
    nb8.value = "8"
    inputValue.value = inputValue.value + "8"

    console.log(inputValue.value);
})

nb9.addEventListener("click",function() {
    nb9.value = "9"
    inputValue.value = inputValue.value + "9"

    console.log(inputValue.value);
})

nb0.addEventListener("click",function() {
    nb0.value = "0"
    inputValue.value = inputValue.value + "0"

    console.log(inputValue.value);
})

//..................................................mes operateur 


let op

add.addEventListener("click",function() {
    op = "+"
    nbA = Number(inputValue.value)
    nbV.push(nbA);
    console.log(nbV);
})

substr.addEventListener("click",function() {
    op = "-"
    nbA = Number(inputValue.value)
    nbV.push(nbA);
})

multi.addEventListener("click",function() {
    op = "*"
    nbA = Number(inputValue.value)
    nbV.push(nbA);
})

divi.addEventListener("click",function() {
    op = "/"
    nbA = Number(inputValue.value)
    nbV.push(nbA);
})

cor.addEventListener("click",function() {
    inputValue.value = ""
    nbA = Number(inputValue.value)
    nbV.push(nbA);
})
//............................................

buttonegal.addEventListener("click",function () {
    switch (button2.value) {
        case "+":

            reponse2.innerHTML = Number(input3.value) + Number(input4.value)
            break;

        case "-":

            reponse2.innerHTML = Number(input3.value) - Number(input4.value)
            break;

        case "/":

            reponse2.innerHTML = Number(input3.value) / Number(input4.value)
            break;

         case "*":

            reponse2.innerHTML = Number(input3.value) * Number(input4.value)
            break;


    }
})