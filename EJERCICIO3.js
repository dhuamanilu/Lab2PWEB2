
 //PROPUESTO3
document.addEventListener('DOMContentLoaded',function(){
	let x =new Date().getTime();
	let Daqp=new Date('2022-08-15').getTime();
	let diff=Daqp-x;
	diff/=1000*60*60*24;

	document.getElementById("resultado").innerHTML="Faltan : "+Math.floor(diff)+" días para el dia de Arequipa";
	return false;	
});


 