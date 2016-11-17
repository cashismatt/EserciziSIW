/**
 * 
 */

function chiedi(mex){
	return prompt(mex);
}
var coloreH1=chiedi("che colore per il tag h1?");
var coloreBody=chiedi("che colore per il tag body?");
var coloreP=chiedi("che colore per il tag P?");
var carattere=chiedi("che carattere?");
var coloreSfondoBody=chiedi("che colore per lo sfondo del body");

var nodeList= document.getElementsByTagName('H1');
for(var i=0;i<nodeList.length;i++){
	nodeList[i].style.color=coloreH1;
	nodeList[i].style.fontsize=carattere;
}
nodeList= document.getElementsByTagName('H3');
for(var i=0;i<nodeList.length;i++){
	nodeList[i].style.color=coloreH1;
	nodeList[i].style.fontSize=carattere;
}

nodeList= document.getElementsByTagName('BODY');
nodeList[0].style.backgroundColor=coloreSfondoBody;
nodeList[0].style.color=coloreBody;
nodeList[0].style.fontSize=carattere;



nodeList= document.getElementsByTagName('P');
for(var i=0;i<nodeList.length;i++){
	//alert(nodeList[i].tagName);
	nodeList[i].style.color=coloreP;
	nodeList[i].style.fontSize=carattere;
}







