//...............................................mon resultat
let resultStyle = document.querySelector('.resultStyle');

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
let pt = document.querySelector('#pt');
let check = document.querySelector('#check');
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
    resultStyle.innerHTML = inputValue.value
    console.log(inputValue.value);
})

nb2.addEventListener("click",function() {
    nb2.value = "2"
    inputValue.value = inputValue.value + "2"
    resultStyle.innerHTML = inputValue.value
    console.log(inputValue.value);
})

nb3.addEventListener("click",function() {
    nb3.value = "3"
    inputValue.value = inputValue.value + "3"
    resultStyle.innerHTML = inputValue.value
    console.log(inputValue.value);
})

nb4.addEventListener("click",function() {
    nb4.value = "4"
    inputValue.value = inputValue.value + "4"
    resultStyle.innerHTML = inputValue.value
    console.log(inputValue.value);
})

nb5.addEventListener("click",function() {
    nb5.value = "5"
    inputValue.value = inputValue.value + "5"
    resultStyle.innerHTML = inputValue.value
    console.log(inputValue.value);
})

nb6.addEventListener("click",function() {
    nb6.value = "6"
    inputValue.value = inputValue.value + "6"
    resultStyle.innerHTML = inputValue.value
    console.log(inputValue.value);
})

nb7.addEventListener("click",function() {
    nb7.value = "7"
    inputValue.value = inputValue.value + "7"
    resultStyle.innerHTML = inputValue.value
    console.log(inputValue.value);
})

nb8.addEventListener("click",function() {
    nb8.value = "8"
    inputValue.value = inputValue.value + "8"
    resultStyle.innerHTML = inputValue.value
    console.log(inputValue.value);
})

nb9.addEventListener("click",function() {
    nb9.value = "9"
    inputValue.value = inputValue.value + "9"
    resultStyle.innerHTML = inputValue.value
    console.log(inputValue.value);
})

nb0.addEventListener("click",function() {
    nb0.value = "0"
    inputValue.value = inputValue.value + "0"
    resultStyle.innerHTML = inputValue.value
    console.log(inputValue.value);
})

pt.addEventListener("click",function() {
    nb0.value = "."
    inputValue.value = inputValue.value + "."

    console.log(inputValue.value);
})
//..................................................mes operateur 

let op

add.addEventListener("click",function() {
    op = "+"
    nbA = Number(inputValue.value)
    nbV.push(nbA);
    inputValue.value = ''
    console.log(nbV);
})

substr.addEventListener("click",function() {
    op = "-"
    nbA = Number(inputValue.value)
    nbV.push(nbA);
    inputValue.value = ''
    console.log(nbV);
})

multi.addEventListener("click",function() {
    op = "*"
    nbA = Number(inputValue.value)
    nbV.push(nbA);
    inputValue.value = ''
    console.log(nbV);
})

divi.addEventListener("click",function() {
    op = "/"
    nbA = Number(inputValue.value)
    nbV.push(nbA);
    inputValue.value = ''
    console.log(nbV);
})

cor.addEventListener("click",function() {
    inputValue.value = ''
})
//............................................

egal.addEventListener("click",function () {
    switch (op) {
        case "+":
            nbB = Number(inputValue.value);
            nbV.push(nbB);
            resultStyle.innerHTML = Number(nbV[0]) + Number(nbV[1]) ;
            console.log(Number(nbV[0]) + Number(nbV[1]) );
            inputValue.value = ''
            nbV = []; 
            break;

        case "-":
            nbB = Number(inputValue.value);
            nbV.push(nbB);
            resultStyle.innerHTML = Number(nbV[0]) - Number(nbV[1]) ;
            console.log(Number(nbV[0]) - Number(nbV[1]) );
            inputValue.value = ''
            nbV = []; 
            break;

        case "*":
            nbB = Number(inputValue.value);
            nbV.push(nbB);
            resultStyle.innerHTML = Number(nbV[0]) * Number(nbV[1]) ;
            console.log(Number(nbV[0]) * Number(nbV[1]) );
            inputValue.value = ''
            nbV = []; 
            break;

        case "/":
            nbB = Number(inputValue.value);
            nbV.push(nbB);
            resultStyle.innerHTML = Number(nbV[0]) / Number(nbV[1]) ;
            console.log(Number(nbV[0]) / Number(nbV[1]) );
            inputValue.value = ''
            nbV = []; 
            break;
        
    }
})
//............................................................
check.onchange = function () {
    if(check.checked){
        inputValue.disabled = true;
    }else{
        inputValue.disabled = false;
    }
}

//...........................................style des boutons
let buttonStyle = document.querySelectorAll('button');

buttonStyle.forEach((e)=>{
    e.style.borderRadius = "50%"
    e.style.borderStyle = "none"
    e.style.backgroundColor = "pink"
    e.style.height = "20px"
    e.style.width = "20px"
    e.style.margin = "5px"
    e.style.boxShadow = "2px 2px 2px black"
    e.style.backgroundColor = "white"
    e.style.color = "pink"
    e.style.alignItems
})

//...................................................style de ma calculatrice
let calculStyle = document.querySelector(".colors");
calculStyle.style.backgroundColor = "pink"
calculStyle.style.width = "170px"
calculStyle.style.height = "160px"
calculStyle.style.borderRadius = "0 0 0 10px"
//.................................................
let result = document.querySelector("#result");
result.style.width = "170px"
result.style.height = "140px"
result.style.backgroundColor = "white"
result.style.border = "pink solid 10px"
result.style.borderRadius = "0 10px 10px 0"
result.style.textAlign = "center"
result.style.display = "flex"
result.style.justifyContent = "center"
result.style.alignItems = "center"
//.................................................
let contenu = document.querySelector('#contenu');
contenu.style.display = "flex"
//.................................................
