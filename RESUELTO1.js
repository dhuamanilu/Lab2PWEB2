
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
//PROPUESTO 1
function retornaDia(){
	let a=new Date();
	return a;
}
