let generateNumber =document.getElementById("genbtn").addEventListener('click',function(){

    let randomNums =Math.round(Math.random()*9000+1000);
     document.getElementById("randomNumberdisplay").value=randomNums;
    
    document.getElementById("randomNumberdisplay").style.color =  "red";  
    document.getElementById("randomNumberdisplay").style.textAlign ="center";
    document.getElementById("randomNumberdisplay").style.fontSize="45px";
     
})
let keys= document.querySelectorAll(".button");
let array = Array.prototype.slice.call(keys);
for (let i = 0; i <array.length; i++) {
    const element =array[i];
    element.addEventListener("click",function(){
       let matcherinput= document.getElementById("matcherInput").value;
       let keynums = element.innerText;
       let total= matcherinput+keynums;
       document.getElementById("matcherInput").value=total;
       
       document.getElementById("matcherInput").style.color =  "red";  
       document.getElementById("matcherInput").style.textAlign ="center";
       document.getElementById("matcherInput").style.fontSize="45px";
    })
}
const submitbtn= document.getElementById("submit");
submitbtn.addEventListener("click",function(){
    if(document.getElementById("randomNumberdisplay").value==""){
        alert("You Need to Generate pin First");
    }
if ( document.getElementById("matcherInput").value==document.getElementById("randomNumberdisplay").value && document.getElementById("randomNumberdisplay").value !=="") {
    document.getElementById("green").style.display="block";
} 


else if(document.getElementById("randomNumberdisplay").value !=="") {
    document.getElementById("red").style.display="block";
}
})
