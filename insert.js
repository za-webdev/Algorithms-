/*inserting value of x at  position y*/

// function insert(arr){
// 	let x=10;
// 	let y=2;

// 	arr.splice(y,0,x);
// 	console.log(arr)
// }
// insert([1,3,5,7])
// function insert(arr){
// 	let x=10;
// 	let y=2;
// 	for (var i=arr.length-1;i>y;i--){
// 		arr[i]=arr[i-1];

// 	}

// 	arr[y]=x;
// 	console.log(arr);
// }

// insert([1,3,4,5])

function multi(arr){
	for(var i=0; i<arr.length;i++){
		for(var j=0;j<arr.length;j++){
			if(i*j == 20){
			console.log(i);
			console.log(j);
			}
		}
	}

}

multi([2,4,5,3])

