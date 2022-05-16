
 //PROPUESTO3
document.addEventListener('DOMContentLoaded',function(){
	let url='https://meet.google.com/axe-mihi-jht?pli=1&authuser=1';
	if(url.substring(0,8)=='https://'){
		url=url.substring(8,url.length);
	}
	let inicio=16,fin=27;
	url=url.substring(inicio,fin);
	let rpta="";
	for(let i=0;i<url.length;i++){
		if(url[i]!='-'){
			rpta+=url[i];	
		}
	}

	document.getElementById("resultado").innerHTML="Código de la sesión sin guiones separados : "+rpta;
	return false;	
});


 