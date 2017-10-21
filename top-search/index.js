/*
* @Author: Administrator
* @Date:   2017-10-21 21:17:45
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-21 22:10:33
*/
window.onload=function(){
	var topSearch=document.getElementById("top-search");
	var tsPull=topSearch.querySelector(".myPull");
	var tsPulls=tsPull.querySelectorAll(".son");
	var tsmyUl=topSearch.querySelector(".myUl");
	var tslis=tsmyUl.querySelectorAll("li");

	for(var i=0;i<tslis.length-2;i++){
		tslis[i].index=i;
		if(!tslis[i].getAttribute("data")){
			tslis[i].onmouseover=function(){
				tsPull.className+=" active";
				tsPulls[this.index].style.display="block";
			};
			tslis[i].onmouseout=function(){
				tsPull.className="myPull";
				tsPulls[this.index].style.display="none";
			}
		}
		tsPull.onmouseover=function(){
			tsPull.className+=" active";
		}
		tsPull.onmouseout=function(){
			tsPull.className="myPull";
		}
	}
}