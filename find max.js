function findMax(arr) {
	let max=arr[0];
	for(var i=0;i<arr.length;i++){
		if(arr[i]>max){
			max= arr[i];
		}
	}
	console.log(max);
}

findMax([-3,1,0,5])