


function Berechnung1(){
  var zweiLinienSoll = parseInt(($(".SollFall1")[0].value));
  var zweiLinienIST1 = parseInt(($(".IstLinie1")[0].value));
  var zweiLinienIST2 = parseInt(($(".IstLinie2")[0].value));
  var Ergebnis1 = ((zweiLinienSoll - (zweiLinienIST1 + zweiLinienIST2))/2)+zweiLinienIST1;
  var Ergebnis2 = ((zweiLinienSoll - (zweiLinienIST1 + zweiLinienIST2))/2)+zweiLinienIST2;
  var auftragGesamt1 = Ergebnis1 + Ergebnis2;  

  $(".Ergebnis1_1").val(Math.floor(Ergebnis1));
  $(".Ergebnis2_1").val(Math.ceil(Ergebnis2));
  $(".gegenCheck1").val(Math.floor(auftragGesamt1));
}

$(".BerechnungZweiLinien").click(function(){
    Berechnung1();
})

function Berechnung2(){
  var dreiLinienSoll = parseInt(($(".SollFall2")[0].value));
  var dreiLinienIST1 = parseInt(($(".IstLinie1_2")[0].value));
  var dreiLinienIST2 = parseInt(($(".IstLinie2_2")[0].value));
  var dreiLinienIST3 = parseInt(($(".IstLinie3_2")[0].value));
  var Ergebnis1 = ((dreiLinienSoll - (dreiLinienIST1 + dreiLinienIST2 + dreiLinienIST3))/3)+dreiLinienIST1;
  var Ergebnis2 = ((dreiLinienSoll - (dreiLinienIST1 + dreiLinienIST2 + dreiLinienIST3))/3)+dreiLinienIST2;
  var Ergebnis3 = ((dreiLinienSoll - (dreiLinienIST1 + dreiLinienIST2 + dreiLinienIST3))/3)+dreiLinienIST3;
  var auftragGesamt2 = Ergebnis1 + Ergebnis2 + Ergebnis3;  

  $(".Ergebnis1_2").val(Math.floor(Ergebnis1));
  $(".Ergebnis2_2").val(Math.ceil(Ergebnis2));
  $(".Ergebnis3_2").val(Math.floor(Ergebnis3));
  $(".gegenCheck2").val(auftragGesamt2);
}

$(".BerechnungDreiLinien").click(function(){
    Berechnung2();
})

function Berechnung3(){
  var vierLinienSoll = parseInt(($(".SollFall3")[0].value));
  var vierLinienIST1 = parseInt(($(".IstLinie1_3")[0].value));
  var vierLinienIST2 = parseInt(($(".IstLinie2_3")[0].value));
  var vierLinienIST3 = parseInt(($(".IstLinie3_3")[0].value));
  var vierLinienIST4 = parseInt(($(".IstLinie4_3")[0].value));
  var Ergebnis1 = ((vierLinienSoll - (vierLinienIST1 + vierLinienIST2 + vierLinienIST3 + vierLinienIST4))/4)+vierLinienIST1;
  var Ergebnis2 = ((vierLinienSoll - (vierLinienIST1 + vierLinienIST2 + vierLinienIST3 + vierLinienIST4))/4)+vierLinienIST2;
  var Ergebnis3 = ((vierLinienSoll - (vierLinienIST1 + vierLinienIST2 + vierLinienIST3 + vierLinienIST4))/4)+vierLinienIST3;
  var Ergebnis4 = ((vierLinienSoll - (vierLinienIST1 + vierLinienIST2 + vierLinienIST3 + vierLinienIST4))/4)+vierLinienIST4;
  var auftragGesamt3 = Ergebnis1 + Ergebnis2 + Ergebnis3 + Ergebnis4;

  $(".Ergebnis1_3").val(Math.floor(Ergebnis1));
  $(".Ergebnis2_3").val(Math.ceil(Ergebnis2));
  $(".Ergebnis3_3").val(Math.floor(Ergebnis3));
  $(".Ergebnis4_3").val(Math.ceil(Ergebnis4));
  $(".gegenCheck3").val(Math.floor(auftragGesamt3));
}

$(".BerechnungVierLinien").click(function(){
    Berechnung3();
})


$(".Löschen").click(function(){
    window.location.reload()
})

$("#Home").click(function(){
    $("#Home").addClass("homeButton");
    setTimeout(() => {
    $("#Home").removeClass("homeButton");
    },1000);
});

//Animation

var cardOneSelected = !true;
var cardTwoSelected = !true;
var cardThreeSelected = !true;

$("#SELECT_CARD_ONE").click(function() {

if (cardOneSelected != true){
	  animateCardOn1();
	  cardOneSelected = true;
}else if (cardOneSelected = true) {
    	  animateCardOff1();
    	  cardOneSelected = false;
}
	});

$("#SELECT_CARD_TWO").click(function() {

if (cardOneSelected != true){
	  animateCardOn2();
	  cardTwoSelected = true;
}else if (cardTwoSelected = true) {
    	  animateCardOff2();
    	  cardTwoSelected = false;
}
	});

$("#SELECT_CARD_THREE").click(function() {

if (cardOneSelected != true){
	  animateCardOn3();
	  cardThreeSelected = true;
}else if (cardThreeSelected = true) {
    	  animateCardOff3();
    	  cardThreeSelected = false;
}
	});

function animateCardOn1(){
    	$("#CARD_ONE").removeClass("cardBodyOne");
    	cardOneSelected = true;
}

function animateCardOff1(){
    	$("#CARD_ONE").addClass("cardBodyOne");
    	cardOneSelected = false;
}

function animateCardOn2(){
    	$("#CARD_TWO").removeClass("cardBodyTwo");
    	cardOneSelected = true;
}

function animateCardOff2(){
    	$("#CARD_TWO").addClass("cardBodyTwo");
    	cardOneSelected = false;
}

function animateCardOn3(){
    	$("#CARD_THREE").removeClass("cardBodyThree");
    	cardOneSelected = true;
}

function animateCardOff3(){
    	$("#CARD_THREE").addClass("cardBodyThree");
    	cardOneSelected = false;
}


