function greatY(arr){
	let y =2;
	count=0;
	for (var i=0;i<arr.length;i++){
		if(arr[i]>y){
			count++;
			
		}
	}
	console.log(count);
}

greatY([1,2,3,4])