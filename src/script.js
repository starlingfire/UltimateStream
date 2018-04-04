function updateValue(str){
	
	var src = str.id;
	var dest = src.substring(0, (src.length - 3));
	var oldValue = document.getElementById(dest).innerHTML;
	var newValue = str.value;
	
	// Show the alert for debugging
	if (document.getElementById("debug").checked) {
		alert("New value: " + newValue + "\nOld value: " + oldValue + "\nSource: " + src + "\nDest: " + dest);
	}
	
	// Neither of these cases fire if updating the team name
	switch(newValue){
		
		// Increase the score by 1
		case "inc":
			newValue = parseInt(oldValue) + 1;
			break;
		
		// Decrease the score by 1		
		case "dec":
			newValue = parseInt(oldValue) - 1;
			break;
	}
	
	// Update the field
	document.getElementById(dest).innerHTML = newValue;
}

function toggleLogo(){
	
	// Show the alert for debugging
	if (document.getElementById("debug").checked) 
		alert(document.getElementById("logo").style.display);
	
	// Toggle the display style of the logo column
	if(document.getElementById("logo").style.display == "none")
		document.getElementById("logo").style.display = "";
	else
		document.getElementById("logo").style.display = "none";
}