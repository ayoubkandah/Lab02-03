Scroll();
function Scroll(){
    var introText=document.getElementsByClassName("photo-template");
   var  screenPos=window.innerHeight/2;
for(var x=0;x<introText.length;x++){
   var introPosition=introText[x].getBoundingClientRect().top;
if(introPosition<screenPos){

    introText[x].classList.add("appear");

}

}
 
// console.log(introPosition);


}

window.addEventListener("scroll",Scroll)