/*inserting value of x at  position y*/

// function insert(arr){
// 	let x=10;
// 	let y=2;

// 	arr.splice(y,0,x);
// 	console.log(arr)
// }
// insert([1,3,5,7])
function insert(arr){
	let x=10;
	let y=2;
	for (var i=arr.length-1;i>y;i--){
		arr[i]=arr[i-1];

	}

	arr[y]=x;
	console.log(arr);
}

insert([1,3,4,5])