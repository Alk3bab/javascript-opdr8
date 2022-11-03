function multiply(){
    num1 = document.getElementById("1").value;
    num2 = document.getElementById("2").value;
    document.getElementById("H").innerHTML = num1 * num2;
}
function devide(){
    num1 = document.getElementById("1").value;
    num2 = document.getElementById("2").value;
    document.getElementById("H").innerHTML = num1 / num2;
} 
function add(){
    num1 = parseInt (document.getElementById("1").value);
    num2 = parseInt (document.getElementById("2").value);
    document.getElementById("H").innerHTML = num1 + num2;
}
function minus(){
    num1 = document.getElementById("1").value;
    num2 = document.getElementById("2").value;
    document.getElementById("H").innerHTML = num1 - num2;
}