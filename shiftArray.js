/*shifts each number by one (to the front)*/

function shift(arr) {
	for (var i=0;i<arr.length-1;i++) {
		arr[i]=arr[i+1];
	}
	arr[arr.length-1]=0;
	console.log(arr);

}

shift([1,5,10,7,-2])