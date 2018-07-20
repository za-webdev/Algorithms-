/*fill the array with 10 values, each value being a random integer between 0 to 100*/

function random(){
	arrnew=[];
	
	for(var i=1;i<11;i++){
		let x=Math.floor((Math.random() * 101));
		arrnew.push(x);
	}
	console.log(arrnew);
}

random();