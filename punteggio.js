var canvasPunti = document.getElementById("canvPunti");
var ctxPunti = canvasPunti.getContext("2d");
ctxPunti.font = "50px Courier New";
var dimXcanvPunti = canvasPunti.width;
var dimYcanvPunti = canvasPunti.height;
var punti=0;
function disegnaPunti() {
	ctxPunti.beginPath();
	ctxPunti.clearRect(0, 0, dimXcanvPunti, dimYcanvPunti);
	ctxPunti.fillStyle = "white";
	ctxPunti.fillText("Punteggio: "+punti, 50, 65);
	ctxPunti.closePath();
 }