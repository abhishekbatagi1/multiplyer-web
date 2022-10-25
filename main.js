const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const queE1 = document.getElementById("question");

const inputE1= document.getElementById("input");

const formE1 = document.getElementById("form")
queE1.innerText = `What is ${num1} multiply by ${num2}`;

const correctans = num1 * num2;

formE1.addEventListener("submit",myfun);

function myfun(){
    const userans = inputE1.value;
    console.log(userans, typeof userans);
}




