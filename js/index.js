window.onload=function(){
    // top-hero
    var topHero=document.getElementById("top-hero");
    var thMyLeft=topHero.querySelector(".myLeft");
    var thMyPulls=thMyLeft.querySelectorAll(".myPull");
    var thLis=thMyLeft.querySelectorAll(".leftLi1");

    for(var i=0;i<thLis.length;i++){
        thLis[i].index=i;
        thLis[i].onmouseover=function(){
            thMyPulls[this.index].style.display="block";
        }
        thLis[i].onmouseout=function(){
            thMyPulls[this.index].style.display="none";
        }
    }


}