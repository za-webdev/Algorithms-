/*swap the first and last value in an array*/

function swap(arr){
	
	let temp= arr[0];
	arr[0]=arr[arr.length-1];
	arr[arr.length-1]=temp;

	console.log(arr)
}

swap([22,5,6,8,4,6])