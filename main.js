	console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
var num1 = parseInt(prompt("Enter a Value", "1"));

var strSpace;
var strCroix;
var line;
var res="";
var i;
if (num1 <= 25){
	for (i = 0; i < num1; i++) {
	    strSpace = " ".repeat(num1 - 1 - i);
	    strCroix = "#".repeat(2 * i + 1);
	    line = strSpace + strCroix;    
	    res += line + "\n";
	  }
	console.clear();
	console.log(res);
	}
else {console.log("Nombre superieur a 25")}



