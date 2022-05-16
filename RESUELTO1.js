
//RESUELTO 1
function arrayGenerator (n,min,max){
	let a=[];
	for(let x=0;x<n;x++){
		a.push(Math.ceil(Math.random()*(max-min)+min));
	}
	return a;
}
//RESUELTO 1 CON MAP
function arrayGeneratorMap (n,min,max){
	let a=Array(n).fill(0);
	let ArrayMap=a.map(function (min,max){return Math.ceil(Math.random()*(max-min)+min)});
	return ArrayMap;
}
//RESUELTO 2
function votesCounting(votes){
	let counting=Array(1000).fill(0)
	for(idx in votes){
		counting[votes[idx]]++
	}
	let maxVotes=-100;
	let winnerID=0;
	for(id in counting){
		if(counting[id]>maxVotes){
			maxVotes=counting[id];
			winnerID=id;
		}
	}
	return {id : winnerID, votes: maxVotes}
}

//PROPUESTO1 
function queDiaEs(numero){
	numero%=7;
	if(numero==0){
		return "Domingo"
	}
	else if(numero==1){
		return "Lunes"
	}
	else if(numero==2){
		return "Martes"
	}
	else if(numero==3){
		return "Miercoles"
	}
	else if(numero==4){
		return "Jueves"
	}
	else if(numero==5){
		return "Viernes"
	}
	else if(numero==6){
		return "Sabado"
	}
}
 //PROPUESTO2
/*document.addEventListener('DOMContentLoaded',function(){
	const texto=document.querySelector("#text");
	const button=document.querySelector("#enviar");
	button.disabled=true;
	name.onkeyup=()=> {
		if(name.value.length>0){
			button.disabled=false;
		}
		else{
			button.disabled=true;
		}

	};
	function invertir(str){
 		let rpta="";
 		for(let x=str.length;x>=0;x--){
 			rpta+=str.substring(x,x-1);
 		}
 		return rpta;
 	}
	document.querySelector("#form1").onsubmit=()=>{
		document.getElementById("resultado").innerHTML=invertir(texto.value);
		return false;
	};
});*/

 