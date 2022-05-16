
 //PROPUESTO5
document.addEventListener('DOMContentLoaded',function(){
	
	let num=document.querySelector("#texto");
	let body = document.getElementsByTagName("body")[0];
	let tabla = document.createElement("table");
	let tblBody = document.createElement("tbody");

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

	for (let i=0;i<10;i++) {
	  let fila=document.createElement("tr");
	  for(let j = 0;j<10;j++) {
	    let celda = document.createElement("td");
	    let textoCelda = document.createTextNode(Math.floor(Math.random()*100+1));
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
	const button = document.createElement('button'); 
	button.type = 'button'; 
	button.innerText = 'Haz Click'; 
	document.body.appendChild(button); 

	
	return false;	
});


 