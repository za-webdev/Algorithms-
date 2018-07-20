/*replaces any number that's negative to a string called 'Dojo'*/

function numToSting(arr) {
	let string="Dojo";
	for (var i=0;i<arr.length;i++){
		if(arr[i]<0){
			arr[i]=string;
		}
	}
	console.log(arr);
}

numToSting([1,-2,5,-3])