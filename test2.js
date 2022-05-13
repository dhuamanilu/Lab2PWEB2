document.addEventListener('DOMContentLoaded',function(){
	const name=document.querySelector("#UserName");
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
	document.querySelector("#form1").onsubmit=()=>{
		document.getElementById("resultado").innerHTML="Hola "+name.value;
		return false;
	};
});
