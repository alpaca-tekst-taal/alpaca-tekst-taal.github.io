var ppw = 0.06;
var ppp = 30;
var pps = 15;
var opm = 1.25;

document.addEventListener('readystatechange', () => {    
  if (document.readyState == 'complete') start();
});

function prijsUpdate() {
	//alert('hoi');
	var prijs = -1;
	if (document.getElementById("telWoorden").checked){
		var wrd = document.getElementById("woorden").value;
		//alert(wrd);
		if (wrd > 0) {
			prijs = wrd * ppw;
			if (document.getElementById("opmaak").checked){prijs *= opm;}
		}
	} else {
		var pag = document.getElementById("paginas").value;
		//alert(pag);
		if (pag > 0) {
			prijs = pag * ppp;
			if (document.getElementById("opmaak").checked){prijs *= opm;}
			if (document.getElementById("scan").checked){prijs += pag*pps;}
		}
	}
	//alert(prijs);
	if (prijs == -1){
		document.getElementById("verzenden").disabled = true;
		//alert(document.getElementById("verzenden").disabled);
		document.getElementById("prijs").innerHTML = "";
	} else {
		//alert(document.getElementById("email").value);
		//alert(document.getElementById("bestand").value);
		//alert(document.getElementById("tekstvak").value);
		if ((document.getElementById("email").value!="") && (document.getElementById("bestand").value!="")){
			document.getElementById("verzenden").disabled = false;
		} else {
			document.getElementById("verzenden").disabled = true;
		}
		prijs = prijs.toFixed(2).toString().replace('.',',');
		document.getElementById("prijs").innerHTML = "€ " + prijs;
	}
	//alert('doei');
}

function inWoorden() {
	//alert('hoi');
	document.getElementById("woordinput").style="";
	document.getElementById("paginainput").style="display:none";
	document.getElementById("scaninput").style="display:none";
	//alert('doei');
}

function inPaginas() {
	//alert('hoi');
	document.getElementById("woordinput").style="display:none";
	document.getElementById("paginainput").style="";
	document.getElementById("scaninput").style="";
	//alert('doei');
}

function start() {
	//alert('hoi');
	document.getElementById("ikweet").style="";
	document.getElementById("paginainput").style="display:none";
	document.getElementById("scaninput").style="display:none";
	document.getElementById("email").required = false;
	document.getElementById("bestand").required = false;
	document.getElementById("woorden").required = false;
	document.getElementById("paginas").required = false;
	document.getElementById("verzenden").disabled = true;
	
	var datum = new Date();
	datum.setDate(datum.getDate() + 7);
	//alert(datum);
	document.getElementById("datum").value = datum.toISOString().slice(0,10);
	//alert(document.getElementById("datum").value);
}