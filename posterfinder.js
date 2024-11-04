window.onload = function(){
	document.getElementById("urlsubmit").onclick = function() {
		var baseurl = String(document.getElementById("baseurl").value);
		var rx = /https:\/\/www\.svtstatic\.se\/image\/custom\/\d+\/(\d+)\/(\d+)/g;
		var m = null;
		m = rx.exec(baseurl);
		var code  = Number(m[1]);
		var extra = Number(m[2]);
		var table = document.getElementById("resultstable");
		for(let i = code-15; i<code+15; i++) {
			var newRow = table.insertRow(-1);
			var urlcell = newRow.insertCell(0);
			var imgcell = newRow.insertCell(1);
			urlcell.innerHTML = "<a href=\"https://www.svtstatic.se/image/custom/2000/"+i+"/"+extra+"\">link</a>";
			imgcell.innerHTML = "<img src=\"https://www.svtstatic.se/image/custom/2000/"+i+"/"+extra+"\"/>";
			console.log("https://www.svtstatic.se/image/custom/2000/"+i+"/"+extra);
		}
		console.log(m);
	};
};