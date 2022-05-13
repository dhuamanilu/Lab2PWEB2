
 //PROPUESTO3
document.addEventListener('DOMContentLoaded',function(){
	let x =new Date();

	let dia=x.getDay();
	let mes=x.getMonth();
	let año=x.getYear();
	let rpta=0;
	let diffAño,diffMes;
	if((mes%2==1 && mes<=7) || (mes>=8 && mes%2==0)){
		dia+=Math.abs(31-dia);
	}
	else if(mes<= 6 && mes%2==0 ){
		dia+=Math.abs(30-dia);
	}
	while(true){

	}


	if(año%4==0 && año%100!=0  || (año%400==0)){
		if(mes<=2){
			rpta++;	
		}
		diffAño=Math.abs(2022-año);
	}


	document.getElementById("resultado").innerHTML="FALTAN MUCHOS DIAS";
	return false;	
});


 