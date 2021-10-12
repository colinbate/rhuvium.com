
function appendTo(to, what, nclass) {
	var unused;
	if (document.getElementById) {
		var dest = document.getElementById(to);
		var newmodel = document.getElementById(what);
		var content = newmodel.innerHTML;
		var temp = document.createElement("div");
		if (nclass !== unused) {
			temp.setAttribute("class", nclass);
		}
		dest.appendChild(temp);
		temp.innerHTML = content;
	}
}

function removeMe(obj, from) {
	var row = obj.parentNode;
	var polist = document.getElementById(from);
	polist.removeChild(row);
}