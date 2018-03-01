module.exports = function check(str, bracketsConfig) {
	
	var length = str.length;
	var arr = ['(', ')'];
	
	if( length % 2 !== 0) return false;
	
	var half = length / 2;
	
	var str1 = str.slice(0,(half+1));
	var str2 = str.slice(half);
	
	
	
	while(str1[half] == str2[0] && half != 0){
	  str1 = str1.slice(0,half);
	  str2 = str2.slice(1);
	  half--;
  }
  
  if (half == 0) return true;
  if (half != 0) return false;
}
