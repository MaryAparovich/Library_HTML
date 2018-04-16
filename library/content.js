
function setText(value) {
	var innerHTMLContent;
	if (value == 'war') {
		innerHTMLContent = document.getElementById('warDiv').innerHTML;
		
	} else if (value == 'anna') {
		innerHTMLContent = document.getElementById('annaDiv').innerHTML;
	}
	document.getElementById('content').innerHTML = innerHTMLContent;
}

