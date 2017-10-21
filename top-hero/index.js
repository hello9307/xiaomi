/*
* @Author: Administrator
* @Date:   2017-10-20 19:54:13
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-20 20:40:59
*/
window.onload=function(){
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