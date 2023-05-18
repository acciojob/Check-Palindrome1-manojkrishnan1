// complete the given function

function palindrome(str){
	str = str.toUpperCase();
	
	let i=0,j=str.length-1, result = true;
	
    while(i<j){
        while(str.charAt(i)==' '){
            i++;
        }
        while(str.charAt(j)==' '){
            j--;
        }
        if(i<j && str.charAt(i)!=str.charAt(j)){
        result = false;
        break;
        }
        i++;
        j--;
    }

	return result;
}
module.exports = palindrome
