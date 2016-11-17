/**
 * 
 */

function Persona(nome,cognome,indirizzo){		//trucco per creare una classe
	this.nome=nome;
	this.cognome=cognome;
	this.indirizzo=indirizzo;
}

var persone = new Array();
persone[0] = new Persona("Pinco","Pallo","Via P.Bucci,30B");
persone[1] = new Persona("Pallo","Pallo","Via P.Bucci,30B");
persone[2] = new Persona("Aldo","Pallo","Via P.Bucci,30B");

var nome= prompt("Nome");
var trovato=false;
for(var i =0; i < persone.length; i++){
	if(nome == persone[i].nome){
		trovato=true;
		break;
	}
}

if(trovato)
	alert("Autorizzato");
else
	alert("non autorizzato");
