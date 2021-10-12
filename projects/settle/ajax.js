function createRequestObject() {
    var request_o;
    var browser = navigator.appName;
    if (browser == "Microsoft Internet Explorer") {
        request_o = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        request_o = new XMLHttpRequest();
    }
    return request_o;
}

var http = createRequestObject();
var ajaxdisplay = 'ajaxdisplay';

function ajaxResponse() {
    if (http.readyState == 4) {
        var display = document.getElementById(ajaxdisplay);
        display.innerHTML = http.responseText;
    }
}

function fetch(uri, func) {
	var none;
    http.open('get', uri);
	if (func===none) {
		http.onreadystatechange = ajaxResponse;
	} else {
    	http.onreadystatechange = func;
	}
    http.send(null);
}

