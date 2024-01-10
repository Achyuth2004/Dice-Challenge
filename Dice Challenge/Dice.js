var randomNumber1=Math.floor(Math.random()*6)+1; //1-6no's
var randomName="dice"+randomNumber1+".png";    //dice(1-6).png
var randomSource="images/"+randomName;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource);

var randomNumber2=Math.floor(Math.random()*6)+1; //1-6no's
var randomName2="dice"+randomNumber2+".png";    //dice(1-6).png
var randomSource2="images/"+randomName2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("p").innerHTML="🏆Player1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("p").innerHTML="🏆Player2 Wins";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("p").innerHTML="👻Draw!";
}
else{
    document.querySelector("p").innerHTML="Refresh Me";
}

