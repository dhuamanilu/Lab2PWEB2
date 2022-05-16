
 //PROPUESTO5
document.addEventListener('DOMContentLoaded',function(){
	
	let num=document.querySelector("#texto");
	const button=document.querySelector("#enviar");
	button.disabled=true;

	num.onkeyup=()=> {
		if(num.value.length>0){
			button.disabled=false;
		}
		else{
			button.disabled=true;
		}

	};
	document.querySelector("#form1").onsubmit=()=>{
		console.log("este es el valor: "+num.value);
		let body = document.getElementsByTagName("body")[0];
		let tabla = document.createElement("table");
		let tblBody = document.createElement("tbody");
		
		let arr = new Array(10);
		for (let i=0;i<arr.length;i++) {
		  arr[i]= new Array(10);
		}

		for (let i=0;i<10;i++) {
	  		let fila=document.createElement("tr");
	  		for(let j = 0;j<10;j++) {
	    		let celda = document.createElement("td");
	    		let numero=Math.floor(Math.random()*100+1);
	    		let textoCelda = document.createTextNode(numero);
	    		arr[i][j]=numero;
	    		celda.appendChild(textoCelda);
	    		fila.appendChild(celda);
	    	}
	    	tblBody.appendChild(fila);
	  	}
		
		tabla.appendChild(tblBody);
		body.appendChild(tabla);
		tabla.setAttribute("border", 2);
		tabla.setAttribute("id", "tabla");
		let result = document.getElementById("resultado");
		result.appendChild(tabla);
		//Boton
		const boton = document.createElement('button'); 
		boton.type = 'button'; 
		boton.innerText = 'Haz Click para calcular la suma de los elementos'; 
		result.appendChild(boton);


		let suma=0;
		for (let i=0;i<10;i++) {
	  		for(let j = 0;j<10;j++) {
	    		suma+=arr[i][j];		
	    	}
	  	}
	  	console.log(suma);
		return false;
	}	
});


 