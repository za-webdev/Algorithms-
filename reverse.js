

function reverse(arr) {
	for (var i=0;i<Math.floor(arr.length/2);i++){
		let temp=arr[i];
		arr[i]=arr[arr.length-1-i];
		arr[arr.length-1-i]=temp;
		
		
	}
	console.log(arr);
}
reverse([0,1,2,3,6,69])