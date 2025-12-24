//your JS code here. If required.
function daysOfYear(Number) {
	if(Number%400 ===0){
		return 366;
	}else if(Number%4 ===0 && Number%100 !==0){
		return 366;
	}else{
		return 365;
	}
}