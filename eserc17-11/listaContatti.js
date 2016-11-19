/**
 * 
 */
var id=0;
function Contatto(nome,cognome,cell,email){
	this.nome=nome;
	this.cognome=cognome;
	this.telefono=cell;
	this.mail=email;
	id=id+1;
	this.id="contatto"+id;
}

var contatti= new Array();

function aggiungiInHTML(contatto){
	
	var tBody = document.getElementById("tBody");
	var ultimaRiga = document.getElementById("ultimaRiga");
	
	var tr = document.createElement("tr");
	tr.setAttribute("id", contatto.id);
	
	var tdNome = document.createElement("td");
	var tdCognome = document.createElement("td");
	var tdTelefono = document.createElement("td");
	var tdMail = document.createElement("td");
	var tdDeleteContact =  document.createElement("button");
	
	tdNome.textContent = contatto.nome;
	tdCognome.textContent = contatto.cognome;
	tdTelefono.textContent = contatto.telefono;
	tdMail.textContent = contatto.mail;
	tdDeleteContact.innerHTML = "Delete";
	tdDeleteContact.setAttribute("id", contatto.id);
	tdDeleteContact.addEventListener("click", function(){
		var id = tdDeleteContact.id;
		deleteContatto(id);
	} );
	
	tr.appendChild(tdNome);
	tr.appendChild(tdCognome);
	tr.appendChild(tdTelefono);
	tr.appendChild(tdMail);
	tr.appendChild(tdDeleteContact);
	
	tBody.insertBefore( tr ,ultimaRiga);
}

function init(){
	var bottoneAddContatto = document.getElementById("addContatto");
	bottoneAddContatto.addEventListener("click", aggiungiContatto );
	
	var bottoneReset = document.getElementById("resetButton");
	bottoneReset.addEventListener("click", pulisciCampi );
}

function aggiungiContatto(){
	var contatto= creaContatto();
	if(contatto!=null){
	contatti.push(contatto);
	aggiungiInHTML(contatto);
	pulisciCampi();
	}
}

function creaContatto(){
	var nome =  document.getElementById("nome");
	var cognome =  document.getElementById("cognome");
	var telefono =  document.getElementById("telefono");
	var mail =  document.getElementById("mail");
	if(  nome.value=="" && cognome.value=="" && telefono.value=="" && mail.value==""){
		alert("IMPOSSIBILE AGGIUNGERE UN CAMPO VUOTO");
		return null;
	}
	return new Contatto(nome.value,cognome.value,telefono.value,mail.value);
}

function pulisciCampi(){
	document.getElementById("nome").value="";
	document.getElementById("cognome").value="";
	document.getElementById("telefono").value="";
	document.getElementById("mail").value="";
}

function deleteContatto(id){
	var element=document.getElementById(id);
	element.parentNode.removeChild(element);
}




