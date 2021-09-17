// JavaScript Document

var lis=document.getElementById("rightMenu").children[0].children,i; 
for(i=0;i<lis.length;i++){
//绑定鼠标事件
	lis[i].addEventListener('mouseover', function(e){
		this.style.cursor="pointer"; 
		var data_menu=this.getAttribute("data-menu") 
		var k=parseInt(data_menu) 
		
		this.style.background="url(images/navover_"+data_menu+".jpg)"; 
		this.style.backgroundRepeat="no-repeat" 
		this.style.color="#FFF" 
		if(k<3){
			this.children[1].style.display="block" 
		}
		
		
}, false); 

lis[i].addEventListener('mouseout', function(e){
	this.style.cursor="auto"; 
	this.style.background=""; 
	this.style.color="#333"; 
	this.children[1].style.display="none" 
}, false); 

}