// document.getElementById("demo").innerHTML = "Ahmed here";
var a= document.querySelector('p');
a.innerHTML = "Ahmed here";
a.style.color = "red";
a.style.fontSize = "20px";
var b = document.querySelector('div');
b.innerHTML = "Khan here";

a.addEventListener("click", function(){
b.innerHTML = "talha";
b.style.color= "blue";
});
