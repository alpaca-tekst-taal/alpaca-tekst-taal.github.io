var ppw = 0.05;
var wpp = 500;
var ppp = ppw * wpp;
var pps = 15;
var opm = 1.25;
var btw = 1.21;

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
		//document.getElementById("verzenden").disabled = true;
		//alert(document.getElementById("verzenden").disabled);
		document.getElementById("prijs").innerHTML = "";
	} else {
		if (document.getElementById("btw").value=="21"){
			prijs *= btw;
		}
		//document.getElementById("verzenden").disabled = false;
		prijs = prijs.toFixed(2).toString().replace('.',',');
		document.getElementById("prijs").innerHTML = "€ " + prijs;
	}
	//alert('doei');
}

function emailen() {
	var body = "Beste%20Alpako,%0A%0AIk%20heb%20een%20vertaling%20voor%20u,%20van%20het%20";
	body += document.getElementById("brontaal").value + "%20naar%20het%20" + document.getElementById("doeltaal").value;
	body += ",%20in%20de%20bijlage%20of%20hieronder%20ingeplakt."
	if (document.getElementById("telWoorden").checked){
		var wrd = document.getElementById("woorden").value;
		if (wrd > 0) {
			body += "%20Het%20document%20telt%20" + wrd + "%20woorden.";
		}
	} else {
		var pag = document.getElementById("paginas").value;
		if (pag > 0) {
			body += "%20Het%20document%20telt%20" + pag + "%20pagina's.";
		}
	}
	if (document.getElementById("scan").checked){body += "%20De%20tekst%20is%20nog%20niet%20digitaal.";}
	if (document.getElementById("opmaak").checked){body += "%20De%20opmaak%20moet%20exact%20overeenkomen%20met%20het%20origineel.";}
	if (document.getElementById("prijs").innerHTML != ""){
		body += "%20De%20geschatte%20prijs%20is%20" + document.getElementById("prijs").innerHTML;
		if (document.getElementById("btw").value=="nul"){body += "%20(zonder%20btw,%20omdat%20...).";}
		else {body += "%20(inclusief%20btw).";}
	}
	body += "%0A%0aMet%20vriendelijke%20groet,%0A%0A";
	window.open("mailto:formulier@alpako.nl?subject=Vertaling%20alpako.nl&body=" + body, 'mail');
	event.preventDefault()
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
	//document.getElementById("email").required = false;
	//document.getElementById("bestand").required = false;
	document.getElementById("woorden").required = false;
	document.getElementById("paginas").required = false;
	//document.getElementById("verzenden").disabled = true;
	
/* 	var datum = new Date();
	datum.setDate(datum.getDate() + 7);
	//alert(datum);
	document.getElementById("datum").value = datum.toISOString().slice(0,10);
	//alert(document.getElementById("datum").value); */
}