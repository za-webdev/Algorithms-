/*The function will return the position where the number is located in the array if found 
if it is not found it will return false.*/

function linearSearch(x,arr){
	for(var i=0;i<arr.length;i++){
		if(arr[i] == x){
			return i;
		}
		
	}

	return false;	
}
linearSearch(100,[1,2,3,4,56])

