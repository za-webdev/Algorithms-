/*find Min max and Average*/

function findAll(arr) {
	let sum=0;
	let max=arr[0];
	let min=arr[0];
	for(var i=0;i<arr.length;i++){
		sum+=arr[i];

		if(arr[i]<min){
			min=arr[i];
		}

		if(arr[i]>max){
			max=arr[i];
		}

	}

	let avg=sum/arr.length;
	console.log(avg);
	console.log(min);
	console.log(max);
}
findAll([1,3,5,7,20])
