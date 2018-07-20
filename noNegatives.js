/*replaces any negative number with the value of 0. */


function noNegatives(arr){
	for (var i=0;i<arr.length;i++){
		if(arr[i]<0){
			arr[i]=0;
		}
	}

	console.log(arr);
}
noNegatives([1,-2,-3,4])