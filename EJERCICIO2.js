
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
document.addEventListener('DOMContentLoaded',function(){
	const texto=document.querySelector("#texto");
	const button=document.querySelector("#enviar");
	button.disabled=true;
	texto.onkeyup=()=> {
		if(texto.value.length>0){
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
});

 