function updateValue(str){
	
	var src = str.id;
	var dest = src.substring(0, (src.length - 3));
	var oldValue = document.getElementById(dest).innerHTML;
	var newValue = str.value;
	
	if (document.getElementById("debug").checked) {
		alert("New value: " + newValue + "\nOld value: " + oldValue + "\nSource: " + src + "\nDest: " + dest);
	}
		
	switch(newValue){
		
		case "inc":
			newValue = parseInt(oldValue) + 1;
			break;
			
		case "dec":
			newValue = parseInt(oldValue) - 1;
			break;
	}
	
	// Update the field
	document.getElementById(dest).innerHTML = newValue;
}