var butt = document.querySelector('button');
var rounds = document.querySelector('.round');

var flag = 0;


butt.addEventListener('click',function(){
if(flag==0){

    rounds.style.backgroundColor= "yellow";
     
console.log('click');
flag=1;
}
else{
    rounds.style.backgroundColor = "transparent";
    console.log("again clicked");
    flag=0;
}
});