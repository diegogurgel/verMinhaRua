
window.onload = function(){

	//document.getElementById("motrarFotos").onclick = mostrarFotosRua;

	escreverCookie("nome", "Diego Gurgel", 1);
}

function ligar(){
			document.getElementById("neon").src = "neon.jpg"; 
			setTimeout("desligar();",30);
}
function desligar(){
	document.getElementById("neon").src = "neon.png";
	setTimeout("ligar();",30);
}

function hora(){
	var now = new Date();
	var horas = now.getHours() + ":" + now.getMinutes() +":"+ now.getSeconds();
	document.getElementById("hora").innerHTML = horas;

}

function escreverCookie(nome, valor, dias){
	var dataeExpCookie = new Date();
	dataeExpCookie .setTime(dataeExpCookie .getTime()+(dias*24*60*60*1000));
	document.cookie=nome + "=" + valor + "; expires=" + dataeExpCookie.toGMTString() + "; path=/";

}
function mostrarFotosRua(){
	document.getElementById("fotos").innerHTML = "";
	var numero = parseInt(document.getElementById("numero").value);
	var local =  document.getElementById("endereco").value;
	var cidade = document.getElementById("cidade").value;
	if((numero=="NaN")||(local =="") || (cidade=="")){
		alert("Prencha todos os campos!");
	}
	if(numero=='NaN'){
		alert(":)");
	}
	else{
		var html="";
		var nClasse = 0;
		for(var i=0;i<10;i++){
			var urlImagem = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location="+local+","+numero+"-"+cidade+"&heading=250&fov=90&pitch=-10&sensor=false"
			//urlImagem  = urlImagem.replace(/ /g,"%20");
			document.getElementById("fotos").innerHTML += '<img class=\"fotoLocal' + nClasse +'\" src='+encodeURI(urlImagem)+'></img>'
			$("#fotos > img").hide();
			//document.write("<img src="+urlImagem+"></img><br/>")
			nClasse+=1;
			numero+=i;
		}
		var todasCarregadas = false;
		var tempoFade = 100;
		nClasse=0;

		while(todasCarregadas == false){
			setTimeout(exibir(nClasse, tempoFade),3000);
			if(nClasse==10){
					todasCarregadas = true;
			}
			nClasse+=1;
			tempoFade+=100;
			clearTimeout();
			
		}
	}
	//document.getElementById("fotos").innerHTML = html;
}
function exibir(nClasse, tempoFade)
{
	//alert(nClasse);
	$(".fotoLocal"+nClasse).load(function(){
		$(".fotoLocal"+nClasse).fadeToggle(tempoFade);
	
	});
}

